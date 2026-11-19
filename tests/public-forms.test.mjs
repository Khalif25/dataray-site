import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import test from "node:test";
import ts from "typescript";

function load(file, deps, env = {}) {
  const exports = {};
  vm.runInNewContext(ts.transpileModule(readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, {
    exports, Buffer, Request, Response, URL, process: { env }, require: n => { assert.ok(n in deps, n); return deps[n]; },
  });
  return exports;
}
const helper = load("lib/public-forms.ts", {});
const contact = { name: "Customer", email: "customer@example.invalid", organization: "Business", service: "DataRay ERP Demo / Onboarding", message: "Please arrange a demonstration." };
function setup(route, error = null, configured = true) {
  const messages = [];
  const api = load(`app/api/${route}/route.ts`, {
    "@/lib/public-forms": helper,
    resend: { Resend: class { emails = { send: async m => { messages.push(m); return { data: null, error }; } }; } },
  }, configured ? { RESEND_API_KEY: "synthetic-no-network" } : {});
  return { messages, post: (body, headers = {}, raw = false) => api.POST(new Request("https://www.dataraysmart.com/api/" + route, { method: "POST", headers: { "content-type": "application/json", ...headers }, body: raw ? body : JSON.stringify(body) })) };
}
test("contact preserves valid customer submissions and escapes every HTML field", async () => {
  const api = setup("contact");
  assert.equal((await api.post({ ...contact, name: "<b>Customer</b>", organization: "<img src=x>", message: "<a href=x>Account</a>\nNext line" })).status, 200);
  const mail = api.messages[0];
  assert.ok(mail.html.includes("&lt;b&gt;Customer&lt;/b&gt;"));
  assert.ok(!mail.html.includes("<img")); assert.ok(!mail.html.includes("<a href"));
  assert.ok(mail.html.includes("<br />")); assert.ok(mail.text.includes("Next line"));
  assert.equal(mail.to.length, 1); assert.equal(mail.replyTo, contact.email);
});
for (const [label, change] of [["missing", { message: undefined }], ["wrong type", { message: {} }], ["oversize field", { name: "x".repeat(121) }], ["service", { service: "forged service" }], ["email markup", { email: "<b>a</b>@example.invalid" }], ["header injection", { email: "a@example.invalid\r\nBcc:b@example.invalid" }], ["unexpected property", { approved: true }]]) {
  test("rejects " + label + " before provider call", async () => {
    const api = setup("contact"); assert.equal((await api.post({ ...contact, ...change })).status, 400); assert.equal(api.messages.length, 0);
  });
}
for (const route of ["contact", "subscribe"]) {
  for (const [name, body, headers, raw, status] of [
    ["invalid JSON", "{", {}, true, 400], ["array", [], {}, false, 400], ["null", null, {}, false, 400],
    ["wrong media type", "x", { "content-type": "text/plain" }, true, 415],
    ["cross origin", {}, { origin: "https://attacker.invalid" }, false, 403],
    ["null origin", {}, { origin: "null" }, false, 403],
    ["cross-site browser", {}, { "sec-fetch-site": "cross-site" }, false, 403],
    ["bounded body", JSON.stringify({ message: "x".repeat(20000) }), {}, true, 413],
  ]) test(`${route}: ${name}`, async () => { const api = setup(route); const r = await api.post(body, headers, raw); assert.equal(r.status, status); assert.equal(api.messages.length, 0); assert.equal(r.headers.get("cache-control"), "no-store"); });
  test(`${route}: honeypot does not send`, async () => { const api = setup(route); assert.equal((await api.post({ ...(route === "contact" ? contact : { email: contact.email }), website: "spam" })).status, 200); assert.equal(api.messages.length, 0); });
  test(`${route}: upstream errors are generic and cannot claim success`, async () => { const api = setup(route, { message: "secret-provider-error", credential: "private" }); const r = await api.post(route === "contact" ? contact : { email: contact.email }); assert.equal(r.status, 503); assert.ok(!(await r.text()).includes("secret-provider-error")); });
  test(`${route}: missing config leaves validation available`, async () => { const api = setup(route, null, false); assert.equal((await api.post({})).status, 400); assert.equal((await api.post(route === "contact" ? contact : { email: contact.email })).status, 503); assert.equal(api.messages.length, 0); });
}
test("newsletter preserves legitimate email and rejects HTML", async () => { const api = setup("subscribe"); assert.equal((await api.post({ email: contact.email })).status, 200); assert.equal((await api.post({ email: "<b>test</b>@example.invalid" })).status, 400); assert.equal(api.messages.length, 1); });

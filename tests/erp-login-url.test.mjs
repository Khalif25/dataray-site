import assert from "node:assert/strict";
import test from "node:test";
import { getErpPlusLoginUrl } from "../lib/erp-login-url.ts";

const productionLogin = "https://erp.dataraysmart.com/web/login";

for (const value of [undefined, "", "   ", "not-a-url", "/login", "http://erp.example.com", "javascript:alert(1)", "https://admin:password@erp.example.com"]) {
  test(`missing or unsafe configuration uses the production login: ${value ? "configured" : "empty"}`, () => {
    assert.equal(getErpPlusLoginUrl(value), productionLogin);
  });
}

for (const path of ["", "/", "///", "/login", "/login/", "/web", "/web/login", "/web/login/"]) {
  test(`normalizes the Odoo login path: ${path || "root"}`, () => {
    assert.equal(getErpPlusLoginUrl(`https://erp.example.com${path}`), "https://erp.example.com/web/login");
  });
}

test("keeps a configured reverse-proxy prefix without duplicating the login path", () => {
  for (const path of ["/tenant", "/tenant/", "/tenant/login", "/tenant/web", "/tenant/web/login/"]) {
    assert.equal(getErpPlusLoginUrl(`https://erp.example.com${path}`), "https://erp.example.com/tenant/web/login");
  }
});

test("preserves database selection and removes fragments and whitespace", () => {
  assert.equal(getErpPlusLoginUrl(" https://erp.example.com/web/login/?db=dataray#login "), "https://erp.example.com/web/login?db=dataray");
});

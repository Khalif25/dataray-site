export class FormError extends Error {
  constructor(message: string, public readonly status = 400) { super(message); }
}

const MAX_BYTES = 16 * 1024;
export const CONTACT_SERVICES = [
  "AI Strategy & Advisory", "DataRay ERP Demo / Onboarding", "DataRay ERP+ Pilot Interest",
  "Executive Dashboards", "Advanced Analytics", "Research & Market Intelligence",
  "Predictive Modeling", "Training Programs",
];

export async function readPublicForm(request: Request) {
  const origin = request.headers.get("origin");
  if (request.headers.get("sec-fetch-site") === "cross-site") throw new FormError("Request origin is not allowed.", 403);
  if (origin) {
    try {
      if (new URL(origin).origin !== new URL(request.url).origin) throw new Error("origin");
    } catch { throw new FormError("Request origin is not allowed.", 403); }
  }
  if (!/^application\/json(?:\s*;|$)/i.test(request.headers.get("content-type") ?? "")) {
    throw new FormError("Send an application/json request.", 415);
  }
  const reader = request.body?.getReader();
  if (!reader) throw new FormError("A JSON object is required.");
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BYTES) { await reader.cancel(); throw new FormError("Request is too large.", 413); }
    chunks.push(value);
  }
  let body: unknown;
  try { body = JSON.parse(Buffer.concat(chunks).toString("utf8")); }
  catch { throw new FormError("Invalid JSON request."); }
  if (!body || typeof body !== "object" || Array.isArray(body)) throw new FormError("A JSON object is required.");
  return body as Record<string, unknown>;
}

export function textField(body: Record<string, unknown>, key: string, max: number, required = true) {
  const raw = body[key];
  if (raw === undefined && !required) return "";
  if (typeof raw !== "string") throw new FormError(`Invalid ${key}.`);
  const value = raw.trim();
  if ((required && !value) || value.length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)) throw new FormError(`Invalid ${key}.`);
  return value;
}

export function emailField(body: Record<string, unknown>) {
  const email = textField(body, "email", 254);
  if (!/^[^\s@<>"(),;:\\]+@[^\s@<>"(),;:\\]+\.[^\s@<>"(),;:\\]+$/.test(email)) throw new FormError("Valid email is required.");
  return email;
}

export function checkFields(body: Record<string, unknown>, allowed: string[]) {
  if (Object.keys(body).some(k => !allowed.includes(k))) throw new FormError("Unexpected form field.");
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);
}

export function formResponse(body: object, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } });
}

export function formFailure(error: unknown) {
  return formResponse({ error: error instanceof FormError ? error.message : "Unable to submit right now. Please try again." }, error instanceof FormError ? error.status : 503);
}

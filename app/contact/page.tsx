"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    service: "AI Strategy & Advisory",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const contentType = response.headers.get("content-type");
      const isJson = contentType?.includes("application/json");

      const data = isJson ? await response.json() : null;

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send inquiry.");
      }

      trackEvent("contact_submit", "contact", form.service);

      setStatus("success");
      setFeedback("Your inquiry was sent successfully.");
      setForm({
        name: "",
        email: "",
        organization: "",
        service: "AI Strategy & Advisory",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Failed to send inquiry."
      );
    }
  }

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <section className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Discuss your data, analytics, or AI project with DataRay
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Whether you need dashboards, analytics systems, research support,
            training, or AI strategy, DataRay helps turn complex information
            into practical intelligence and better decisions.
          </p>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-black">
              Send an inquiry
            </h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Tell us what you are trying to solve, what kind of support you
              need, and the type of organization you represent.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-neutral-700">
                    Full name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-black/20"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-black/20"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-neutral-700">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={form.organization}
                    onChange={(e) =>
                      setForm({ ...form, organization: e.target.value })
                    }
                    placeholder="Organization name"
                    className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-black/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700">
                    Service of interest
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-black/20"
                  >
                    <option>AI Strategy & Advisory</option>
                    <option>Executive Dashboards</option>
                    <option>Advanced Analytics</option>
                    <option>Research & Market Intelligence</option>
                    <option>Predictive Modeling</option>
                    <option>Training Programs</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700">
                  Project details
                </label>
                <textarea
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your project, challenge, or what you would like DataRay to help with."
                  className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-black/20"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send inquiry"}
              </button>

              {feedback ? (
                <p
                  className={`text-sm ${
                    status === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {feedback}
                </p>
              ) : null}
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                Best For
              </p>
              <ul className="mt-4 space-y-3 leading-7 text-neutral-600">
                <li>• Organizations that need executive dashboards</li>
                <li>• Teams exploring AI strategy or adoption</li>
                <li>• Institutions seeking research and analytics support</li>
                <li>• Leaders who want data-driven decision systems</li>
                <li>• Groups interested in professional training programs</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                Direct Contact
              </p>
              <p className="mt-4 text-neutral-600">
                Email:
                <span className="ml-2 font-medium text-black">
                  {siteConfig.email}
                </span>
              </p>
              <p className="mt-2 text-neutral-600">
                Location:
                <span className="ml-2 font-medium text-black">
                  {siteConfig.location}
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
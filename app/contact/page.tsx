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

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
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
            Contact DataRay
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Discuss your analytics, AI, research, or decision-intelligence needs
            with our team.
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            We work with institutions, businesses, and organizations seeking
            practical data-driven solutions.
          </p>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                Global Presence
              </p>

              <div className="mt-6 space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-black">
                    Somalia — Head Office
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    Garowe, Puntland, Somalia
                    <br />
                    Hodan District
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-black">
                    Kenya — Regional Presence
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    Nairobi, Kenya
                    <br />
                    Westlands Business District
                  </p> 
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-black">
                    United Kingdom — International Presence
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    Birmingham, United Kingdom
                    <br />
                    Erdinton 
                  </p> 
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                Project Inquiries
              </p>

              <p className="mt-4 leading-7 text-neutral-600">
                All project inquiries, collaboration requests, and partnership
                discussions are coordinated through our central contact channel.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-medium text-black">Email</p>
                  <p className="mt-1 text-neutral-600">
                    {siteConfig.contact.general}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-black">Business line</p>
                  <p className="mt-1 text-neutral-600">+252907736110</p>
                  {/*update to the kenya whatsapp later for max  trust*/}
                </div>

                <div>
                  <p className="text-sm font-medium text-black">Response time</p>
                  <p className="mt-1 text-neutral-600">
                    Typically within 12–24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
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
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
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
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
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
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Describe your project, challenge, or what you would like DataRay to help with."
                  className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-black/20"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-full bg-[#0B3B82] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send an inquiry"}
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
        </section>
      </div>
    </main>
  );
}
"use client";

import { FormEvent, useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage("You have successfully subscribed to weekly DataRay insights.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Unable to subscribe right now. Please try again.");
    }
  }

  return (
    <section className="border-t border-slate-200 bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 px-8 py-10 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] sm:px-12">
          <p className="eyebrow text-cyan-300">Weekly Intelligence Brief</p>

          <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Subscribe to weekly DataRay insights
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                Receive weekly updates on AI, analytics, dashboards, market intelligence,
                and strategic research. Designed for leaders, researchers, institutions,
                and professionals who want sharper decision-making.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-cyan-300/50"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>

              {message && (
                <p
                  className={`text-sm ${
                    status === "success" ? "text-green-300" : "text-red-300"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
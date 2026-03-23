"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    const redirectTo =
      typeof window !== "undefined"
        ? `${window.location.origin}/academy/reset-password`
        : undefined;

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setMessage("Password reset email sent. Check your inbox.");
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#020817] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-[24px] border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl font-semibold">Forgot password</h1>
        <p className="mt-3 text-sm text-slate-400">
          Enter your email and we’ll send you a password reset link.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
          />

          {error && <p className="text-sm text-red-300">{error}</p>}
          {message && <p className="text-sm text-cyan-200">{message}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950"
          >
            {loading ? "Sending..." : "Send reset link"}
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-400">
          Back to{" "}
          <Link href="/academy/login" className="text-cyan-300">
            login
          </Link>
        </p>
      </div>
    </main>
  );
}
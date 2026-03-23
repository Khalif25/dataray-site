"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setMessage("Password updated successfully. You can now log in.");
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#020817] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-[24px] border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl font-semibold">Reset password</h1>
        <p className="mt-3 text-sm text-slate-400">
          Enter your new password below.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
          />

          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={8}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
          />

          {error && <p className="text-sm text-red-300">{error}</p>}
          {message && <p className="text-sm text-cyan-200">{message}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950"
          >
            {loading ? "Updating..." : "Update password"}
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
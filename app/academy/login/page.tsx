"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();
  const searchParams = useSearchParams();

  const course = searchParams.get("course");
  const action = searchParams.get("action");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (course && action === "waitlist") {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          course_slug: course,
          action: "waitlist",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to join waitlist.");
        setLoading(false);
        return;
      }

      router.push("/academy/dashboard");
      router.refresh();
      return;
    }

    if (course && action === "payment") {
      router.push(`/academy/payment?course=${course}`);
      router.refresh();
      return;
    }

    router.push("/academy/dashboard");
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-[#020817] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            DataRay Academy
          </p>

          <h1 className="mt-4 text-3xl font-semibold">Log in</h1>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            />

            {error && <p className="text-sm text-red-300">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          <p className="mt-4 text-sm text-slate-400">
            <Link href="/academy/forgot-password" className="text-cyan-300">
              Forgot your password?
            </Link>
          </p>

          <p className="mt-6 text-sm text-slate-400">
            Need an account?{" "}
            <Link
              href={
                course
                  ? `/academy/register?course=${course}${action ? `&action=${action}` : ""}`
                  : "/academy/register"
              }
              className="text-cyan-300"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
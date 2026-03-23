"use client";

import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

function RegisterPageContent() {
  const supabase = createClient();
  const router = useRouter();
  const searchParams = useSearchParams();

  const course = searchParams.get("course");
  const action = searchParams.get("action");

  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [workStatus, setWorkStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          organization,
          phone,
          country,
          city,
          job_title: jobTitle,
          work_status: workStatus,
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSuccess("Account created successfully. You can now log in to continue.");
    setLoading(false);

    const query = new URLSearchParams();
    if (course) query.set("course", course);
    if (action) query.set("action", action);

    setTimeout(() => {
      router.push(
        query.toString()
          ? `/academy/login?${query.toString()}`
          : "/academy/login"
      );
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-[#020817] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            DataRay Academy
          </p>

          <h1 className="mt-4 text-3xl font-semibold">Create account</h1>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Create your learner account to continue with your course request.
          </p>

          <form onSubmit={handleRegister} className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            />

            <input
              type="text"
              placeholder="Organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            />

            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            />

            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            />

            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            />

            <input
              type="text"
              placeholder="Job title / role"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            />

            <input
              type="text"
              placeholder="Work status (optional)"
              value={workStatus}
              onChange={(e) => setWorkStatus(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            />

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
              minLength={8}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            />

            {error && <p className="text-sm text-red-300">{error}</p>}
            {success && <p className="text-sm text-cyan-200">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950"
            >
              {loading ? "Creating..." : "Create account"}
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-400">
            Already registered?{" "}
            <Link
              href={
                course
                  ? `/academy/login?course=${course}${action ? `&action=${action}` : ""}`
                  : "/academy/login"
              }
              className="text-cyan-300"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#020817] px-4 py-12 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-8">
              <p className="text-sm text-slate-400">Loading registration page...</p>
            </div>
          </div>
        </main>
      }
    >
      <RegisterPageContent />
    </Suspense>
  );
}
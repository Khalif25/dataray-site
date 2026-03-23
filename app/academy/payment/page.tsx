"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { academyCourses } from "@/lib/data";

const SUPPORT_EMAIL = "abdinur.khalif@dataraysmart.com";

function PaymentPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseSlug = searchParams.get("course");

  const [loading, setLoading] = useState(false);

  const course = useMemo(
    () => academyCourses.find((item) => item.slug === courseSlug),
    [courseSlug],
  );

  const handlePaid = async () => {
    if (!courseSlug) return;

    setLoading(true);

    const res = await fetch("/api/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        course_slug: courseSlug,
        action: "enroll",
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Failed to submit enrollment request.");
      setLoading(false);
      return;
    }

    alert(
      data.message ||
        "Your payment-linked enrollment request has been submitted for review.",
    );
    router.push("/academy/dashboard");
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-[#020817] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl rounded-[28px] border border-white/10 bg-white/5 p-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
          DataRay Academy
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight">
          Complete your enrollment
        </h1>

        <p className="mt-3 text-base leading-7 text-slate-300">
          {course
            ? `To complete enrollment for ${course.title}, please make payment using one of the options below.`
            : "Please complete payment using one of the options below."}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-slate-400">Course</p>
            <p className="mt-1 text-lg font-semibold text-white">
              {course?.title || courseSlug || "Selected course"}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-slate-400">Fee</p>
            <p className="mt-1 text-lg font-semibold text-white">$30</p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
          <h2 className="text-xl font-semibold">Payment options</h2>

          <div className="mt-5 space-y-4">
            <div>
              <p className="text-sm text-slate-400">EVC Plus</p>
              <p className="mt-1 font-medium text-white">+252 XXX XXX XXX</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Dahabshiil</p>
              <p className="mt-1 font-medium text-white">WJLD3825</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Golis</p>
              <p className="mt-1 font-medium text-white">+252907736110</p>
            </div>

            <div>
              <p className="text-sm text-slate-400">Reference</p>
              <p className="mt-1 font-medium text-white">
                Use your full name and course title if possible.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-400/10 p-6">
          <h2 className="text-xl font-semibold text-white">After payment</h2>
          <p className="mt-3 leading-7 text-slate-200">
            Send payment proof via WhatsApp or contact support by email for verification.
            Once verified, your course access will be approved.
          </p>
          <p className="mt-3 text-sm text-slate-300">
            Support email:{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-cyan-300 underline underline-offset-4"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handlePaid}
            disabled={loading || !courseSlug}
            className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:brightness-110 disabled:opacity-70"
          >
            {loading ? "Submitting..." : "I have paid / Submit request"}
          </button>

          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="rounded-xl border border-white/10 px-5 py-3 text-center font-medium text-white transition hover:bg-white/5"
          >
            Email support
          </a>

          <Link
            href="/academy/dashboard"
            className="rounded-xl border border-white/10 px-5 py-3 text-center font-medium text-white transition hover:bg-white/5"
          >
            Back to dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#020817] px-4 py-12 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-[28px] border border-white/10 bg-white/5 p-8">
            <p className="text-sm text-slate-400">Loading payment page...</p>
          </div>
        </main>
      }
    >
      <PaymentPageContent />
    </Suspense>
  );
}
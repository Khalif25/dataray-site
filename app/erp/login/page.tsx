import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site-url";

const ERP_APP_URL = (
  process.env.ERP_APP_URL ||
  process.env.NEXT_PUBLIC_ERP_APP_URL ||
  "https://erp.dataraysmart.com"
).replace(/\/$/, "");

const loginHref = `${ERP_APP_URL}/login`;

export const metadata: Metadata = {
  title: "DataRay ERP Login | Secure ERP Access",
  description:
    "Access the DataRay ERP secure login handoff page for authorized ERP users and organizations requesting ERP access.",
  alternates: {
    canonical: `${SITE_URL}/erp/login`,
  },
};

export default function ErpLoginPage() {
  return (
    <main className="bg-[#07172d] px-6 py-20 text-white sm:py-24">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
            Secure ERP Access
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Log in to your DataRay ERP command center.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Authorized users can continue from the public ERP domain to the
            secure DataRay ERP login. Public website pages never expose
            internal ERP records.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={loginHref}
              className="inline-flex justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Open ERP Login
            </Link>
            <Link
              href="/erp/demo"
              className="inline-flex justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/60"
            >
              View Demo
            </Link>
            <Link
              href="/erp"
              className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/60"
            >
              ERP Overview
            </Link>
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-cyan-100">
            Use your authorized DataRay ERP account. If your organization has
            not been onboarded yet, request access through DataRay support.
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
          <h2 className="text-2xl font-semibold tracking-tight">
            Access layers
          </h2>
          <div className="mt-6 grid gap-3">
            {[
              "DataRay ERP Standard",
              "DataRay ERP+",
              "Manager permissions",
              "AI provider configuration",
              "Human-reviewed reports",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

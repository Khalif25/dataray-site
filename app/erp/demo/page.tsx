import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site-url";

const demoCards = [
  ["Executive Health", "82%", "Stable with watch items"],
  ["Pending Approvals", "7", "Two urgent decisions"],
  ["Payment Review", "12", "Four require verification"],
  ["Document Expiry", "4", "One critical renewal"],
  ["Branch Signal", "North", "Needs management attention"],
  ["Risk Heatmap", "3 High", "Sample exceptions"],
];

const workflows = [
  "Ask a natural-language question about sales, stock, cash, and risk.",
  "Review summarized evidence instead of raw public records.",
  "Send a report to management after human review.",
];

export const metadata: Metadata = {
  title: "DataRay ERP Demo | Executive Command Center",
  description:
    "Explore a public sample demo of the DataRay ERP+ command center, AI insight layer, forecasting signals, and executive workflow.",
  alternates: {
    canonical: `${SITE_URL}/erp/demo`,
  },
};

export default function ErpDemoPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-[#07172d] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
            DataRay ERP+ Demo
          </p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Preview the executive command center.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                This public demo shows how DataRay ERP+ can connect operations,
                approvals, forecasting, risk signals, and reviewed AI-assisted
                reporting in one workspace.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/erp/login"
                  className="inline-flex justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Go to Login Page
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/60"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
            <p className="rounded-2xl border border-cyan-200/20 bg-cyan-300/10 p-5 text-sm leading-7 text-cyan-50">
              Sample data only. Live dashboards, AI reports, forecasts, and
              internal records require authenticated ERP access and the correct
              permissions.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {demoCards.map(([label, value, detail]) => (
              <article
                key={label}
                className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <p className="text-sm font-medium text-slate-600">{label}</p>
                <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                  {value}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {detail}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <section className="rounded-[28px] border border-slate-200 bg-white p-7">
              <p className="eyebrow">Ask DataRay AI</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                Sample answer preview
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Revenue is improving, but branch-level payment verification and
                stock pressure should be reviewed before the next procurement
                cycle. The recommended action is to clear urgent approvals,
                verify pending payments, and review stock movement for the
                North branch.
              </p>
            </section>

            <section className="rounded-[28px] border border-slate-200 bg-slate-950 p-7 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Workflow
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                From evidence to action
              </h2>
              <ul className="mt-6 space-y-4">
                {workflows.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

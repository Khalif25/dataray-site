import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site-url";

const standardCapabilities = [
  "Finance and accounting workflows",
  "Inventory and stock management",
  "Sales and customer management",
  "Procurement and purchasing",
  "HR and staff records",
  "Projects and task management",
  "Departmental reporting",
  "Management dashboards",
  "Role-based access and approvals",
  "Multi-branch and multi-department support",
];

const standardFit = [
  "Medium businesses",
  "Universities",
  "NGOs",
  "Hospitals and clinics",
  "Construction companies",
  "Service organizations",
  "Growing enterprises",
];

const advancedCapabilities = [
  "AI executive assistant",
  "Predictive analytics",
  "Sales and demand forecasting",
  "Inventory and procurement prediction",
  "Risk and anomaly detection",
  "AI-powered report generation",
  "Executive decision dashboards",
  "Natural-language business queries",
  "Department performance intelligence",
  "Donor, board, and management report support",
];

const advancedFit = [
  "Large companies",
  "Major NGOs",
  "Universities",
  "Hospitals",
  "Government institutions",
  "Multi-branch organizations",
  "Data-intensive enterprises",
];

const comparison = [
  {
    label: "DataRay ERP",
    value: "Enterprise operations management",
  },
  {
    label: "DataRay ERP+",
    value: "AI-powered enterprise intelligence",
  },
];

export const metadata: Metadata = {
  title: {
    absolute:
      "DataRay ERP | Enterprise Management and AI Intelligence Solutions",
  },
  description:
    "DataRay ERP is an upcoming enterprise management solution from DataRay Smart Solutions for operations, reporting, workflows, dashboards, and AI-powered decision intelligence.",
  keywords: [
    "DataRay ERP",
    "DataRay ERP+",
    "enterprise management system",
    "ERP software Somalia",
    "AI-powered ERP",
    "ERP for NGOs",
    "ERP for universities",
    "ERP for healthcare institutions",
    "executive decision dashboards",
    "enterprise intelligence",
  ],
  alternates: {
    canonical: `${SITE_URL}/erp`,
  },
  openGraph: {
    title: "DataRay ERP | Enterprise Management Solutions",
    description:
      "Upcoming ERP and ERP+ tiers from DataRay Smart Solutions for structured operations and AI-enhanced enterprise intelligence.",
    url: `${SITE_URL}/erp`,
    siteName: "DataRay Smart Solutions",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "DataRay Smart Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DataRay ERP | Enterprise Management Solutions",
    description:
      "Structured ERP operations and AI-powered enterprise intelligence from DataRay Smart Solutions.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function ErpPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#07172d] px-6 py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.18),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
              DataRay ERP
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional ERP solutions for growing organizations
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              DataRay ERP is an upcoming enterprise management solution from
              DataRay Smart Solutions, designed to help businesses, NGOs,
              universities, healthcare institutions, and public organizations
              manage operations with greater structure, visibility, and
              intelligence.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
              Built around a two-tier model, DataRay ERP will support both
              standard enterprise operations and advanced AI-powered decision
              intelligence.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Request ERP Consultation
              </Link>
              <a
                href="#erp-plus"
                className="inline-flex justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/60 hover:bg-white/15"
              >
                Explore ERP+
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur">
            <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
                  Enterprise Console
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Operations to intelligence
                </h2>
              </div>
              <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-medium text-cyan-100">
                Upcoming
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Finance",
                "Procurement",
                "HR Records",
                "Dashboards",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                >
                  <p className="text-sm font-medium text-white">{item}</p>
                  <div className="mt-4 h-2 rounded-full bg-cyan-300/70" />
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-white/15" />
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-200/20 bg-cyan-300/10 p-5">
              <p className="text-sm font-semibold text-cyan-100">
                ERP+ intelligence layer
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Forecasting, anomaly detection, executive dashboards, and
                natural-language business queries for larger organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <TierSection
            id="erp-standard"
            eyebrow="DataRay ERP Standard"
            title="Structured enterprise management for growing organizations"
            description="DataRay ERP Standard is designed for organizations that need a reliable, integrated management system for daily operations, reporting, workflows, and departmental coordination."
            capabilities={standardCapabilities}
            bestFor={standardFit}
            status="Upcoming / Available for consultation and pilot planning"
            cta="Request ERP Consultation"
          />

          <TierSection
            id="erp-plus"
            eyebrow="DataRay ERP+"
            title="AI-enhanced enterprise intelligence"
            description="DataRay ERP+ is the advanced tier of DataRay ERP, designed for larger organizations that need more than operational management. It combines ERP workflows with AI-powered insights, predictive analytics, executive dashboards, and intelligent reporting."
            capabilities={advancedCapabilities}
            bestFor={advancedFit}
            status="Upcoming / Pilot-ready concept under development"
            cta="Join ERP+ Pilot Interest List"
            featured
          />
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow">From Operations to Intelligence</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              ERP designed to help leaders understand what is happening and
              what comes next
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Traditional ERP systems help organizations record activities.
              DataRay ERP is designed to go further by helping organizations
              manage operations, understand performance, detect risks, forecast
              needs, and make better decisions.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {comparison.map((item) => (
              <div
                key={item.label}
                className="rounded-[24px] border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-700">
                  {item.label}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-slate-950 px-8 py-10 text-white sm:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Request a Consultation
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Explore the right ERP tier for your organization
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
            DataRay Smart Solutions is preparing pilot consultations for
            organizations interested in structured ERP implementation, digital
            transformation, and AI-enhanced decision intelligence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
            >
              Request ERP Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-cyan-200/60"
            >
              Join ERP+ Pilot Interest List
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function TierSection({
  id,
  eyebrow,
  title,
  description,
  capabilities,
  bestFor,
  status,
  cta,
  featured = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  capabilities: string[];
  bestFor: string[];
  status: string;
  cta: string;
  featured?: boolean;
}) {
  return (
    <article
      id={id}
      className={`rounded-[28px] border p-7 shadow-sm ${
        featured
          ? "border-cyan-200 bg-slate-950 text-white"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      <p
        className={`text-sm font-medium uppercase tracking-[0.2em] ${
          featured ? "text-cyan-300" : "text-cyan-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight">{title}</h2>
      <p
        className={`mt-5 text-base leading-8 ${
          featured ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>

      <div className="mt-8 grid gap-7 xl:grid-cols-2">
        <ListBlock
          title="Core Capabilities"
          items={capabilities}
          featured={featured}
        />
        <ListBlock title="Best For" items={bestFor} featured={featured} />
      </div>

      <div
        className={`mt-8 rounded-2xl border p-5 ${
          featured
            ? "border-white/10 bg-white/[0.05]"
            : "border-slate-200 bg-slate-50"
        }`}
      >
        <p
          className={`text-xs font-medium uppercase tracking-[0.18em] ${
            featured ? "text-cyan-200" : "text-slate-500"
          }`}
        >
          Status
        </p>
        <p
          className={`mt-2 text-sm leading-7 ${
            featured ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {status}
        </p>
      </div>

      <div className="mt-8">
        <Link
          href="/contact"
          className={`inline-flex justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
            featured
              ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
              : "bg-slate-950 text-white hover:bg-slate-800"
          }`}
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}

function ListBlock({
  title,
  items,
  featured,
}: {
  title: string;
  items: string[];
  featured: boolean;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6">
            <span
              className={`mt-2 h-2 w-2 shrink-0 rounded-full ${
                featured ? "bg-cyan-300" : "bg-cyan-600"
              }`}
            />
            <span className={featured ? "text-slate-300" : "text-slate-600"}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

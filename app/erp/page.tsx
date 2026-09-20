import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site-url";

const erpCapabilities = [
  "Fast sales recording",
  "Inventory and stock tracking",
  "Product, SKU, and barcode lookup",
  "Purchases and stock additions",
  "Customer credit and collections",
  "Supplier payable tracking",
  "Daily expenses",
  "Daily and weekly business reports",
  "Low-stock visibility",
  "Mobile and tablet friendly workflows",
];

const erpFit = [
  "Retail shops",
  "Cosmetics shops",
  "Clothing shops",
  "Phone and accessory shops",
  "Supermarkets",
  "Pharmacies",
  "Wholesalers",
  "Small and medium businesses",
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
    value: "Everyday control for small and medium businesses",
  },
  {
    label: "DataRay ERP+",
    value: "AI-powered enterprise intelligence",
  },
];

const demoSignals = [
  {
    label: "Revenue trend",
    value: "+14%",
    detail: "Sample month-over-month growth signal",
  },
  {
    label: "Approvals",
    value: "7",
    detail: "Pending management decisions",
  },
  {
    label: "Risk alerts",
    value: "3",
    detail: "High-priority sample exceptions",
  },
  {
    label: "Stock pressure",
    value: "Medium",
    detail: "Forecasted inventory watch item",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "DataRay ERP and DataRay ERP+ | Business Software",
  },
  description:
    "DataRay ERP is the default for small and medium businesses. DataRay ERP+ supports larger businesses with enterprise workflows and decision intelligence.",
  keywords: [
    "DataRay ERP",
    "DataRay ERP+",
    "enterprise management system",
    "ERP software Somalia",
    "inventory software Somalia",
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
    title: "DataRay ERP and DataRay ERP+",
    description:
      "A unified ERP product family from DataRay Smart Solutions for shops, growing organizations, and AI-enhanced enterprise intelligence.",
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
    title: "DataRay ERP and DataRay ERP+",
    description:
      "Two products: DataRay ERP for small and medium businesses, and DataRay ERP+ for large businesses.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

const erpJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DataRay ERP",
  alternateName: [
    "DataRay ERP+",
    "DataRay ERP Plus",
  ],
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}/erp`,
  description:
    "DataRay ERP supports everyday operations for small and medium businesses. DataRay ERP+ is designed for larger organizations.",
  publisher: {
    "@type": "Organization",
    name: "DataRay Smart Solutions",
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/premium_logo.png`,
      width: 1024,
      height: 1024,
    },
  },
};

export default function ErpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(erpJsonLd) }}
      />
      <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#07172d] px-6 py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.18),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
              DataRay ERP
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              One ERP family for retail operations, growing organizations, and
              AI intelligence
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              DataRay ERP is our default product for small and medium businesses.
              DataRay ERP+ is designed for large businesses with more complex
              operations and enterprise intelligence needs.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
              Choose the product that fits your business: everyday sales, stock,
              and financial control with DataRay ERP, or enterprise planning
              and decision support with DataRay ERP+.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/download/android" className="inline-flex justify-center rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200">Download Android App</Link>
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Request ERP Consultation
              </Link>
              <Link
                href="/erp/demo"
                className="inline-flex justify-center rounded-full border border-cyan-200/30 bg-cyan-200/10 px-6 py-3 text-sm font-semibold text-cyan-50 transition hover:border-cyan-200/70 hover:bg-cyan-200/15"
              >
                View Demo
              </Link>
              <a
                href="#erp"
                className="inline-flex justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/60 hover:bg-white/15"
              >
                Compare Products
              </a>
              <Link
                href="/erp/login"
                className="inline-flex justify-center rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Choose Login
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur">
            <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
                  Product Family
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Two products. One trusted partner.
                </h2>
              </div>
              <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-medium text-cyan-100">
                Two products
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "DataRay ERP",
                "DataRay ERP+",
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
                natural-language business queries sit on top of a practical ERP
                foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-2">
          <TierSection
            id="erp"
            eyebrow="DataRay ERP"
            title="Everyday control for small and medium businesses"
            description="DataRay ERP is our default product for small and medium businesses. Manage sales, stock, purchasing, customer and supplier balances, expenses, and business reporting from one workspace."
            capabilities={erpCapabilities}
            bestFor={erpFit}
            status="Web access available. Android app in controlled pilot review."
            cta="Explore DataRay ERP"
            loginHref="/erp/access"
            loginLabel="Log in to DataRay ERP"
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
            loginHref="/erp/plus/login"
            loginLabel="Log in to ERP+"
            featured
          />
        </div>
      </section>

      <section id="erp-demo" className="border-y border-slate-200 bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Interactive Demo</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              See the ERP+ command center before requesting access
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              The public demo uses sample information to show how DataRay ERP+
              can combine operations, approvals, risk, forecasting, and
              executive reporting into one decision workspace.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/erp/demo"
                className="inline-flex justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Open Full Demo
              </Link>
              <Link
                href="/erp/login"
                className="inline-flex justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-700"
              >
                Go to Login Page
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  Sample Dashboard
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Executive Command Center
                </h3>
              </div>
              <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
                Demo
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {demoSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-sm font-medium text-slate-600">
                    {signal.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                    {signal.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {signal.detail}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 rounded-2xl border border-cyan-100 bg-cyan-50 p-4 text-sm leading-7 text-cyan-900">
              Demo panels are illustrative only. Live ERP data appears only
              after authenticated access and the correct permissions.
            </p>
          </div>
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
              DataRay ERP gives small and medium businesses clear daily control
              over sales, stock, purchasing, and reporting. DataRay ERP+ brings
              enterprise workflows and decision intelligence to larger businesses.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
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
            Explore the right ERP product for your organization
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Whether you are moving from manual shop records, organizing a
            growing institution, or preparing for AI-enhanced decision
            intelligence, DataRay can help you choose the right product and plan
            the implementation path.
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
    </>
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
  loginHref,
  loginLabel,
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
  loginHref: string;
  loginLabel: string;
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
        <div className="flex flex-col gap-3">
          <Link
            href={loginHref}
            className={`inline-flex justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
              featured
                ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                : "bg-slate-950 text-white hover:bg-slate-800"
            }`}
          >
            {loginLabel}
          </Link>
          <Link
            href="/contact"
            className={`inline-flex justify-center rounded-full border px-6 py-3 text-sm font-semibold transition ${
              featured
                ? "border-white/20 text-white hover:border-cyan-200/60"
                : "border-slate-300 text-slate-900 hover:border-cyan-500 hover:text-cyan-700"
            }`}
          >
            {cta}
          </Link>
        </div>
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

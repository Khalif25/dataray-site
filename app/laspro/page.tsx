import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Barcode,
  Boxes,
  CircleDollarSign,
  ClipboardList,
  CreditCard,
  FileSpreadsheet,
  Gauge,
  HandCoins,
  PackageCheck,
  ReceiptText,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Store,
  Truck,
  Users,
  WalletCards,
} from "lucide-react";

const siteUrl = "https://dataraysmart.com";
const appUrl =
  process.env.NEXT_PUBLIC_LASPRO_APP_URL || "https://app.dataraysmart.com";

const description =
  "LasPro is a fast inventory, sales, stock, and light accounting system by DataRay Smart Solutions for retail shops, wholesalers, cosmetics stores, phone shops, pharmacies, and growing businesses.";

const keywords = [
  "LasPro",
  "DataRay Smart Solutions",
  "inventory system Somalia",
  "stock management system",
  "sales management system",
  "POS system Somalia",
  "inventory software",
  "shop management system",
  "retail management system",
  "stock tracking app",
  "business management software",
  "sales and stock system",
];

const problems = [
  "Stock confusion between shelves, purchases, and sales",
  "Manual notebook errors that slow down daily work",
  "Unpaid customer debt that is hard to follow up",
  "Supplier debt tracking across purchases and payments",
  "Missing daily sales reports at closing time",
  "Difficulty knowing profit and business performance",
  "Slow product lookup during busy selling hours",
  "Poor stock visibility before restocking decisions",
];

const features: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Fast Sell page",
    description:
      "Record sales quickly with a focused workflow for busy shop counters.",
    icon: ShoppingCart,
  },
  {
    title: "Product and item management",
    description:
      "Keep products organized with names, categories, units, prices, and stock details.",
    icon: Boxes,
  },
  {
    title: "Barcode and SKU support",
    description:
      "Find products faster using barcode or SKU search during selling and stock checks.",
    icon: Barcode,
  },
  {
    title: "Add Stock and Purchases",
    description:
      "Record purchases, stock additions, supplier details, and buying activity clearly.",
    icon: Truck,
  },
  {
    title: "Opening Stock import",
    description:
      "Start from existing products and opening stock with Excel onboarding support.",
    icon: FileSpreadsheet,
  },
  {
    title: "Stock tracking",
    description:
      "See available stock, movement, low stock signals, and product availability.",
    icon: PackageCheck,
  },
  {
    title: "Customer Collections",
    description:
      "Track customer credits, collections, balances, and payment references.",
    icon: HandCoins,
  },
  {
    title: "Supplier Payables",
    description:
      "Follow supplier debts, supplier payments, and unpaid purchase balances.",
    icon: WalletCards,
  },
  {
    title: "Expenses",
    description:
      "Record daily expenses and understand how they affect business results.",
    icon: CreditCard,
  },
  {
    title: "Reports and insights",
    description:
      "Review daily and weekly reports with smart business insights for better decisions.",
    icon: BarChart3,
  },
  {
    title: "Low stock alerts",
    description:
      "Know which items need attention before shelves run empty.",
    icon: Gauge,
  },
  {
    title: "Receipt and reference support",
    description:
      "Use optional receipts and references to strengthen accountability.",
    icon: ReceiptText,
  },
];

const industries = [
  "Retail shops",
  "Cosmetics shops",
  "Clothing shops",
  "Phone and accessory shops",
  "Supermarkets",
  "Pharmacies",
  "Beauty stores",
  "Wholesalers",
  "Small and medium businesses",
];

const differentiators = [
  "Simple and fast for everyday shop operations",
  "Designed for real shops and practical staff workflows",
  "Mobile and tablet friendly for counter and back-office use",
  "No heavy ERP complexity or unnecessary setup burden",
  "Easy staff training for growing teams",
  "Works well as the business expands",
  "Built and supported by DataRay Smart Solutions",
];

const benefits = [
  "Sell faster during busy hours",
  "Reduce stock mistakes and manual errors",
  "Know what is available before promising customers",
  "Track customers who owe money",
  "Track supplier debts and payments",
  "Understand daily business performance",
  "Make better restocking decisions",
  "Improve trust, accountability, and financial awareness",
];

const heroCapabilities: { label: string; icon: LucideIcon }[] = [
  { label: "Inventory management", icon: Boxes },
  { label: "Sales recording", icon: ShoppingCart },
  { label: "Stock tracking", icon: PackageCheck },
  { label: "Financial awareness", icon: CircleDollarSign },
  { label: "Business reports", icon: ClipboardList },
  { label: "Mobile and tablet use", icon: Smartphone },
];

const screenshots = [
  {
    title: "Sell screen",
    icon: ShoppingCart,
    rows: ["Product lookup", "Cart review", "Payment status"],
  },
  {
    title: "Stock screen",
    icon: Boxes,
    rows: ["Available stock", "Low stock items", "Purchase history"],
  },
  {
    title: "Reports screen",
    icon: BarChart3,
    rows: ["Daily summary", "Weekly overview", "Profit awareness"],
  },
  {
    title: "Collections screen",
    icon: HandCoins,
    rows: ["Customer balances", "Payments received", "Supplier payables"],
  },
];

const faqs = [
  {
    question: "What is LasPro?",
    answer:
      "LasPro is a web-based business system by DataRay Smart Solutions for managing sales, inventory, stock, purchases, expenses, customer credits, supplier payables, and reports.",
  },
  {
    question: "Who is LasPro for?",
    answer:
      "LasPro is for retail shops, wholesalers, cosmetics stores, clothing shops, phone and accessory shops, supermarkets, pharmacies, beauty stores, and other growing businesses.",
  },
  {
    question: "Does LasPro support barcode or SKU search?",
    answer:
      "Yes. LasPro supports barcode and SKU-based product lookup so staff can find items faster during sales and stock work.",
  },
  {
    question: "Can LasPro import products from Excel?",
    answer:
      "Yes. DataRay can support Excel product import and onboarding to help a business start with its existing item list and opening stock.",
  },
  {
    question: "Does LasPro track customer debts?",
    answer:
      "Yes. LasPro helps businesses track customer credit sales, collections, balances, and payment follow-up.",
  },
  {
    question: "Does LasPro track supplier payables?",
    answer:
      "Yes. LasPro supports supplier payable tracking so businesses can monitor unpaid supplier balances and payments.",
  },
  {
    question: "Does LasPro show reports?",
    answer:
      "Yes. LasPro provides daily and weekly reports to help business owners understand sales, stock, collections, expenses, and performance.",
  },
  {
    question: "Is LasPro suitable for small businesses?",
    answer:
      "Yes. LasPro is built to be simple, fast, and practical for small and medium businesses that need better control without heavy ERP complexity.",
  },
  {
    question: "How can I request a demo?",
    answer:
      "You can request a LasPro demo by contacting DataRay Smart Solutions through the contact page.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "DataRay Smart Solutions",
      url: siteUrl,
      logo: `${siteUrl}/premium_logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "info@dataraysmart.com",
        telephone: "+252907736110",
        areaServed: ["SO", "KE", "GB"],
        availableLanguage: ["English", "Somali"],
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/laspro#software`,
      name: "LasPro",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      url: `${siteUrl}/laspro`,
      description:
        "Inventory, sales, stock, and light accounting system for businesses.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/contact`,
      },
    },
    {
      "@type": "Product",
      "@id": `${siteUrl}/laspro#product`,
      name: "LasPro",
      brand: {
        "@id": `${siteUrl}/#organization`,
      },
      category: "Inventory and sales management software",
      description,
      url: `${siteUrl}/laspro`,
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/laspro#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute:
      "LasPro Inventory and Sales Management System | DataRay Smart Solutions",
  },
  description,
  keywords,
  alternates: {
    canonical: `${siteUrl}/laspro`,
  },
  openGraph: {
    title:
      "LasPro Inventory and Sales Management System | DataRay Smart Solutions",
    description,
    url: `${siteUrl}/laspro`,
    siteName: "DataRay Smart Solutions",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DataRay Smart Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "LasPro Inventory and Sales Management System | DataRay Smart Solutions",
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200/60 bg-cyan-50 text-cyan-700">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-base leading-8 text-slate-600">{copy}</p>
      ) : null}
    </div>
  );
}

export default function LasProPage() {
  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-[#07172d] px-6 py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.18),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
              LasPro by DataRay Smart Solutions
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              LasPro: Fast Inventory, Sales, and Stock Management for Growing
              Businesses
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              A simple, fast, and reliable business system by DataRay Smart
              Solutions for managing sales, stock, purchases, customer credits,
              supplier payables, expenses, and reports.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Request Demo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Contact DataRay
              </Link>
              <a
                href={appUrl}
                className="inline-flex items-center justify-center rounded-full border border-cyan-200/30 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/10"
              >
                Login to App
              </a>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300">
              Previously introduced as LaSocodPro, LasPro is the updated product
              name under DataRay Smart Solutions.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/12 bg-white/[0.06] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.24)] backdrop-blur">
            <div className="rounded-[22px] border border-white/10 bg-slate-950 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
                    Business counter
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-white">
                    Sales and Stock View
                  </h2>
                </div>
                <div className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  Ready
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {["Sales", "Stock", "Reports"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-xs text-slate-400">{item}</p>
                    <div className="mt-4 h-2 rounded-full bg-cyan-300/70" />
                    <div className="mt-2 h-2 w-2/3 rounded-full bg-white/20" />
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center gap-3">
                  <Search className="h-5 w-5 text-cyan-200" aria-hidden="true" />
                  <div className="h-3 flex-1 rounded-full bg-white/15" />
                  <div className="h-8 rounded-full bg-cyan-300 px-4 text-xs font-semibold leading-8 text-slate-950">
                    Fast lookup
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {["Product found", "Stock checked", "Sale recorded"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-xl bg-slate-900 px-4 py-3"
                      >
                        <span className="text-sm text-slate-200">{item}</span>
                        <BadgeCheck
                          className="h-4 w-4 text-emerald-300"
                          aria-hidden="true"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 px-6 py-18 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="eyebrow">What LasPro manages</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Simple business control without heavy ERP complexity
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              LasPro helps shop owners and teams manage inventory, sales
              recording, stock tracking, financial awareness, and business
              reports from one practical web system.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {heroCapabilities.map(({ label, icon }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <IconBadge icon={icon} />
                <p className="font-semibold text-slate-950">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Problems LasPro Solves"
            title="Built around the daily problems that slow shops down"
            copy="LasPro gives owners, managers, and staff clearer control over sales, stock, debts, payables, reports, and product lookup."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {problems.map((problem) => (
              <div
                key={problem}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700"
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-cyan-500" />
                {problem}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Core Features"
            title="Everything needed for sales, stock, money flow, and reporting"
            copy="LasPro combines fast counter operations with the back-office visibility business owners need."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.04)]"
              >
                <IconBadge icon={feature.icon} />
                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="eyebrow">Industries Served</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Practical for many shop types and growing businesses
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              LasPro is built for businesses that need faster selling, cleaner
              stock control, clearer customer and supplier balances, and better
              reporting without a complicated enterprise system.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
              >
                <Store className="h-5 w-5 text-cyan-600" aria-hidden="true" />
                <span className="text-sm font-medium text-slate-800">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07172d] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Why LasPro Is Different
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Fast enough for real shop work, clear enough for business owners
            </h2>
          </div>

          <div className="grid gap-3">
            {differentiators.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <ShieldCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Business Benefits"
            title="Better daily control creates better business decisions"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <Users className="h-5 w-5 text-cyan-600" aria-hidden="true" />
                <p className="mt-4 text-sm font-medium leading-7 text-slate-800">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Visual Preview"
            title="Clean screens for daily sales, stock, reports, and collections"
            copy="These are public visual placeholders that show the type of workflow LasPro supports. They do not contain private client data."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {screenshots.map((screen) => {
              const Icon = screen.icon;

              return (
                <div
                  key={screen.title}
                  className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_16px_38px_rgba(15,23,42,0.06)]"
                >
                  <div className="border-b border-slate-200 bg-slate-950 p-5 text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 text-slate-950">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-semibold">{screen.title}</h3>
                    </div>
                  </div>
                  <div className="space-y-3 p-5">
                    {screen.rows.map((row) => (
                      <div
                        key={row}
                        className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
                      >
                        <span className="text-sm text-slate-700">{row}</span>
                        <div className="h-2 w-14 rounded-full bg-cyan-500/70" />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionIntro
            eyebrow="FAQ"
            title="Common questions about LasPro"
          />

          <div className="mt-10 divide-y divide-slate-200 rounded-[24px] border border-slate-200 bg-white">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6">
                <h3 className="text-lg font-semibold text-slate-950">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[28px] bg-slate-950 px-8 py-10 text-white sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
            Request a LasPro demo
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Interested in LasPro for your business?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Contact DataRay Smart Solutions to request a demo or onboarding
            support for your shop, store, wholesaler, or growing business.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Request Demo
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={appUrl}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Login to App
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

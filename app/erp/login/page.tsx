import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site-url";
import { erpLoginProducts } from "../_components/product-login";

export const metadata: Metadata = {
  title: "DataRay ERP Login | Choose Your ERP App",
  description:
    "Choose the correct DataRay ERP login for DataRay ERP or DataRay ERP+.",
  alternates: {
    canonical: `${SITE_URL}/erp/login`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ErpLoginSelectorPage() {
  return (
    <main className="bg-[#07172d] px-6 py-20 text-white sm:py-24">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
            Secure ERP Access
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Choose the DataRay ERP app you want to log in to.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            DataRay ERP is for small and medium businesses. DataRay ERP+
            is for larger businesses. Choose your workspace below.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {erpLoginProducts.map((product) => (
            <article
              key={product.slug}
              className="rounded-[28px] border border-white/10 bg-white/[0.06] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.2)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                {product.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                {product.name}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {product.description}
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm leading-7 text-slate-200">
                {product.audience}
              </div>
              <Link
                href={product.route}
                className="mt-7 inline-flex w-full justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                {product.primaryLabel}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/erp"
            className="inline-flex justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/60"
          >
            Back to ERP Overview
          </Link>
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/60"
          >
            Request Access Help
          </Link>
        </div>
      </section>
    </main>
  );
}

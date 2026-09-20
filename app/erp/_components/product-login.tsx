import Link from "next/link";
const erpUrl = "https://app.dataraysmart.com/login";
const plusValue = process.env.ERP_PLUS_APP_URL || process.env.NEXT_PUBLIC_ERP_PLUS_APP_URL || "";
const plusUrl = plusValue.startsWith("https://") ? `${plusValue.replace(/\/$/, "")}/web/login` : "";
export type ErpLoginProduct = {
  slug: "erp" | "plus"; name: string; eyebrow: string; route: string;
  audience: string; description: string; loginUrl: string; primaryLabel: string;
};
export const erpLoginProducts: ErpLoginProduct[] = [
  { slug: "erp", name: "DataRay ERP", eyebrow: "Small and medium businesses", route: "/erp/access",
    audience: "Shops, wholesalers, service businesses, and growing teams",
    description: "Your everyday workspace for sales, stock, purchasing, customer balances, expenses, and reporting.",
    loginUrl: erpUrl, primaryLabel: "Sign in to DataRay ERP" },
  { slug: "plus", name: "DataRay ERP+", eyebrow: "Large businesses", route: "/erp/plus/login",
    audience: "Large businesses, institutions, and complex organizations",
    description: "Enterprise operations and decision intelligence. Contact DataRay to discuss access and implementation.",
    loginUrl: plusUrl, primaryLabel: "Sign in to DataRay ERP+" },
];
export function getErpLoginProduct(slug: ErpLoginProduct["slug"]) {
  return erpLoginProducts.find(product => product.slug === slug);
}
export function ProductLoginPage({ product }: { product: ErpLoginProduct }) {
  return <main className="bg-[#07172d] px-6 py-20 text-white sm:py-24">
    <section className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">{product.eyebrow}</p>
      <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">{product.name}</h1>
      <p className="mt-6 text-lg leading-8 text-slate-200">{product.description}</p>
      <p className="mt-4 text-slate-300">{product.audience}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        {product.loginUrl ? <a href={product.loginUrl} className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950">{product.primaryLabel}</a> : <Link href="/contact" className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950">Request ERP+ access</Link>}
        <Link href="/erp/login" className="rounded-full border border-white/30 px-6 py-3">Choose product</Link>
        {product.slug === "erp" && <Link href="/download/android" className="rounded-full border border-emerald-300/50 px-6 py-3 text-emerald-200">Download Android App</Link>}
      </div>
    </section>
  </main>;
}

import Link from "next/link";

export const metadata = {
  title: "DataRay ERP App for Android",
  description: "Current status of the DataRay ERP Android controlled pilot.",
  alternates: { canonical: "https://www.dataraysmart.com/download/android" },
};

export default function AndroidDownloadPage() {
  return (
    <main className="bg-[#07172d] px-6 py-20 text-white">
      <section className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
          DataRay ERP · Android
        </p>
        <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">
          Android pilot downloads are temporarily paused.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-200">
          We are checking customer-payment recovery before inviting more clients to install the app. Please continue using the web ERP for business operations.
        </p>

        <div className="mt-8 rounded-3xl border border-white/15 bg-white/5 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
                Pilot hold
              </p>
              <h2 className="mt-2 text-2xl font-semibold">DataRay ERP App</h2>
              <p className="mt-3 leading-7 text-slate-300">
                New Android installations are paused while we verify safe payment recovery. If the app is already installed, keep it installed so saved drafts and recovery records remain intact.
              </p>
            </div>
            <a
              href="https://app.dataraysmart.com/login"
              className="inline-flex justify-center rounded-full bg-emerald-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-200"
            >
              Open Web ERP
            </a>
          </div>
        </div>

        <p className="mt-6 text-slate-300">
          If a payment shows “Awaiting server confirmation” in an installed app, do not submit the same payment again. Keep the reference and contact support.
        </p>
        <div className="mt-8 flex flex-wrap gap-5">
          <Link className="text-cyan-200 underline" href="/contact">Contact support</Link>
          <Link className="text-cyan-200 underline" href="/erp">Compare DataRay ERP and ERP+</Link>
          <a className="text-cyan-200 underline" href="https://app.dataraysmart.com/login">Open Web ERP</a>
        </div>
      </section>
    </main>
  );
}

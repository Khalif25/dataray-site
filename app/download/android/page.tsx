import Link from "next/link";

const appVersion = "0.4.2";
const apkUrl = "/downloads/dataray-erp-app-0.4.2.apk";
const apkSha256 = "e2bf5c902fba4e380635bd817d07209ddfe3cba144f1d0da48361d777c9f1816";

export const metadata = {
  title: "DataRay ERP App for Android",
  description: "Official Android app download and installation guidance for the DataRay ERP controlled pilot.",
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
          Download the controlled pilot app.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-200">
          DataRay ERP App brings sales, stock, collections, and reporting to approved Android pilot clients.
        </p>

        <div className="mt-8 rounded-3xl border border-white/15 bg-white/5 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Controlled pilot
              </p>
              <h2 className="mt-2 text-2xl font-semibold">DataRay ERP App {appVersion}</h2>
              <p className="mt-3 leading-7 text-slate-300">
                Android 8.0 or later. Install only from this official DataRay domain and keep the web ERP available during the pilot.
              </p>
            </div>
            <a
              href={apkUrl}
              className="inline-flex justify-center rounded-full bg-emerald-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-200"
            >
              Download APK
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              SHA-256 checksum
            </p>
            <p className="mt-2 break-all font-mono text-sm text-slate-200">{apkSha256}</p>
          </div>
        </div>

        <h2 className="mt-10 text-xl font-semibold">Install on an Android phone</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-200">
          <li>Open this page on the client phone and tap Download APK.</li>
          <li>Open the downloaded file. If Android asks, allow the browser or Files app to install it.</li>
          <li>Open DataRay ERP App, sign in with the assigned account, and confirm the correct business and branch.</li>
          <li>Install updates over the existing app. Do not uninstall first, because local drafts and recovery records may be removed.</li>
        </ol>

        <p className="mt-6 text-slate-300">
          The pilot covers approved daily workflows only. Keep the web ERP available for advanced accounting, printer integrations, notifications, and any workflow not yet accepted for mobile use.
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

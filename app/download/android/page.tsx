import Link from "next/link";

const version = "0.4.6";
const apkPath = `/downloads/dataray-erp-app-${version}.apk`;
const checksum = "8ef9da787577e5b4965a0c0915bf6016d5eb363d45c4abb6c296dc0235ddbe3f";

export const metadata = {
  title: "Download DataRay ERP App for Android",
  description: "Download the signed DataRay ERP Android app for the controlled pilot.",
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
          DataRay ERP App {version}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-200">
          The signed Android app is available for a controlled client pilot. It supports Android 8.0 or later. Install it only from this official DataRay domain and keep the web ERP available during the pilot.
        </p>

        <div className="mt-8 rounded-3xl border border-white/15 bg-white/5 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
            Controlled pilot
          </p>
          <h2 className="mt-2 text-2xl font-semibold">Version {version}</h2>
          <p className="mt-3 leading-7 text-slate-300">
            For approved pilot users. Sign in with your assigned account and confirm your business and branch before recording transactions.
          </p>
          <a
            href={apkPath}
            download
            className="mt-6 inline-flex justify-center rounded-full bg-emerald-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Download APK
          </a>
          <p className="mt-6 text-sm text-slate-300">SHA-256 checksum</p>
          <code className="mt-2 block break-all rounded-lg bg-slate-950 p-3 text-sm text-emerald-200">{checksum}</code>
        </div>

        <h2 className="mt-12 text-2xl font-semibold">Install on an Android phone</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-slate-200">
          <li>Open this page on the phone and tap Download APK.</li>
          <li>Open the downloaded file. If Android asks, allow the browser or Files app to install it.</li>
          <li>Open DataRay ERP App, sign in, and confirm the correct business and branch.</li>
          <li>For updates, install over the existing app. Do not uninstall first: uninstalling can remove local drafts and recovery records.</li>
        </ol>

        <p className="mt-8 leading-7 text-slate-300">
          The pilot covers approved daily workflows. Use the web ERP for advanced accounting, printer integrations, notifications, and any workflow not yet accepted for mobile use. If an operation awaits server confirmation, keep its reference and ask support to review it before creating another transaction.
        </p>
        <div className="mt-8 flex flex-wrap gap-5">
          <Link className="text-cyan-200 underline" href="/contact">Contact support</Link>
          <Link className="text-cyan-200 underline" href="/privacy">Privacy policy</Link>
          <Link className="text-cyan-200 underline" href="/erp">Compare DataRay ERP and ERP+</Link>
          <a className="text-cyan-200 underline" href="https://app.dataraysmart.com/login">Open Web ERP</a>
        </div>
      </section>
    </main>
  );
}

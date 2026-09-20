import Link from "next/link";
export const metadata = { title: "DataRay ERP App for Android", description: "Official Android app information and installation guidance for DataRay ERP.", alternates: { canonical: "https://www.dataraysmart.com/download/android" } };
export default function AndroidDownloadPage() {
  return <main className="bg-[#07172d] px-6 py-20 text-white">
    <section className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">DataRay ERP · Android</p>
      <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">Your business, in your pocket.</h1>
      <p className="mt-6 text-lg leading-8 text-slate-200">DataRay ERP App brings sales, stock, collections, and reporting to your Android phone.</p>
      <div className="mt-8 rounded-3xl border border-white/15 bg-white/5 p-7">
        <h2 className="text-2xl font-semibold">Controlled pilot · release review in progress</h2>
        <p className="mt-4 leading-7 text-slate-300">The client download will be available here after final device and transaction checks. Existing clients can continue using the web ERP.</p>
        <a href="https://app.dataraysmart.com/login" className="mt-6 inline-flex rounded-full bg-emerald-300 px-6 py-3 font-semibold text-slate-950">Open DataRay ERP</a>
      </div>
      <h2 className="mt-10 text-xl font-semibold">Installing the app when your pilot is ready</h2>
      <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-200"><li>Open this official DataRay page on your phone and download the APK.</li><li>Open the downloaded file. If Android asks, allow your browser to install this app, then turn that permission off after installation.</li><li>Sign in with your existing DataRay account and choose your permitted business and branch.</li></ol>
      <p className="mt-6 text-slate-300">Android 8.0 or later is required. Install only from the official DataRay domain. Your pilot coordinator will provide the app version and checksum.</p>
      <p className="mt-4 text-slate-300">The pilot covers core daily operations. Advanced accounting, printer integrations, notifications, and unverified stock or return workflows remain in the web ERP.</p>
      <div className="mt-8 flex gap-5"><Link className="text-cyan-200 underline" href="/contact">Contact support</Link><Link className="text-cyan-200 underline" href="/erp">Compare DataRay ERP and ERP+</Link></div>
    </section>
  </main>;
}

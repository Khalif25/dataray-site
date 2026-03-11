import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Modern AI, Analytics & Intelligence
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-black sm:text-7xl">
            Data-driven intelligence for organizations that want to move with clarity.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            DataRay helps businesses, institutions, and public-sector teams turn complex
            data into executive dashboards, strategic research, predictive insight, and
            practical AI solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Explore Services
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-black transition hover:border-black/20 hover:bg-neutral-50"
            >
              Start a Project
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm text-neutral-500">
            <div>
              <p className="text-2xl font-semibold text-black">AI</p>
              <p>Strategy & adoption</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-black">Data</p>
              <p>Analytics & dashboards</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-black">Research</p>
              <p>Intelligence & insight</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-500">Decision Intelligence</p>
                <h3 className="mt-1 text-xl font-semibold text-black">Executive Snapshot</h3>
              </div>
              <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                Live View
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-neutral-50 p-4">
                <p className="text-sm text-neutral-500">Forecast Confidence</p>
                <p className="mt-3 text-3xl font-semibold text-black">92%</p>
              </div>

              <div className="rounded-2xl bg-neutral-50 p-4">
                <p className="text-sm text-neutral-500">Active Insights</p>
                <p className="mt-3 text-3xl font-semibold text-black">18</p>
              </div>

              <div className="rounded-2xl bg-neutral-50 p-4 sm:col-span-2">
                <p className="text-sm text-neutral-500">Operational Signals</p>
                <div className="mt-4 space-y-3">
                  <div className="h-3 w-full rounded-full bg-neutral-200">
                    <div className="h-3 w-[78%] rounded-full bg-black" />
                  </div>
                  <div className="h-3 w-full rounded-full bg-neutral-200">
                    <div className="h-3 w-[62%] rounded-full bg-blue-500" />
                  </div>
                  <div className="h-3 w-full rounded-full bg-neutral-200">
                    <div className="h-3 w-[85%] rounded-full bg-neutral-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-full bg-blue-100 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 -z-10 h-40 w-40 rounded-full bg-neutral-200 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import AnimatedBackground from "./animated-background";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020B1F] px-6 py-20 text-white sm:py-24">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
            Modern AI, Analytics & Intelligence
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">
            Data-driven intelligence for organizations that want to move with clarity.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            DataRay helps businesses, institutions, and public-sector teams turn complex
            data into executive dashboards, strategic research, predictive insight, and
            practical AI solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/services" className="hero-primary-button">
              Explore Services
            </Link>

            <Link href="/contact" className="hero-secondary-button">
              Start a Project
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm text-slate-400">
            <div>
              <p className="text-2xl font-semibold text-white">AI</p>
              <p>Strategy & adoption</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">Data</p>
              <p>Analytics & dashboards</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">Research</p>
              <p>Intelligence & insight</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400">Decision Intelligence</p>
                <h3 className="mt-1 text-xl font-semibold text-white">Executive Snapshot</h3>
              </div>
              <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                Live View
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Forecast Confidence</p>
                <p className="mt-3 text-3xl font-semibold text-white">92%</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Active Insights</p>
                <p className="mt-3 text-3xl font-semibold text-white">18</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                <p className="text-sm text-slate-400">Operational Signals</p>

                <div className="mt-4 space-y-3">
                  <div className="h-3 w-full rounded-full bg-white/10">
                    <div className="h-3 w-[78%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>
                  <div className="h-3 w-full rounded-full bg-white/10">
                    <div className="h-3 w-[62%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                  </div>
                  <div className="h-3 w-full rounded-full bg-white/10">
                    <div className="h-3 w-[85%] rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 -z-10 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-[#020817] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        
        <h1 className="text-4xl font-bold tracking-tight">
          DataRay Publications
        </h1>

        <p className="mt-4 max-w-3xl text-slate-300">
          Research papers, analytical reports, and technical studies published by
          DataRay. Our publications focus on artificial intelligence, data science,
          healthcare analytics, and strategic intelligence for emerging economies.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {/* Publication Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">
              AI and the Future of Work in Africa
            </h2>

            <p className="mt-3 text-sm text-slate-300">
              {/*A research report exploring how artificial intelligence will reshape*/}
              {/*employment patterns, skill demand, and economic opportunity across African economies.*/}
            </p>

            <p className="mt-3 text-xs text-slate-400">
              DataRay Research Series · 2026
            </p>

            <button className="mt-5 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900">
              Read Publication
            </button>
          </div>

          {/* Publication Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">
              Data-Driven Healthcare Systems
            </h2>

            <p className="mt-3 text-sm text-slate-300">
              {/* An analytical report demonstrating how healthcare institutions can
              use predictive analytics and dashboards to monitor disease burden
              and operational performance. */}
            </p>

            <p className="mt-3 text-xs text-slate-400">
              DataRay Health Analytics Report · 2026
            </p>

            <button className="mt-5 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900">
              Read Publication
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Publications</p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          DataRay Publications
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
          Research papers, analytical reports, and technical studies published
          by DataRay. Our publications focus on artificial intelligence, data
          science, healthcare analytics, and strategic intelligence for emerging
          economies.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Somalia AI Report */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_50px_rgba(37,99,235,0.10)]">
            {/*
            <img
              src="/publications/cover.png"
              alt="AI Somalia Report Cover"
              className="mb-4 w-full rounded-lg object-cover"
            />
            */}

            <h2 className="text-xl font-semibold tracking-tight text-slate-950">
              The Age of AI: A Nation at Risk of Being Left Out
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Artificial Intelligence Readiness, Policy Gaps, and Strategic
              Challenges in Somalia. This report examines Somalia&apos;s position
              in the emerging global AI landscape and identifies critical
              policy, infrastructure, and education gaps shaping future
              technological development.
            </p>

            <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
              DataRay Research Series · 2026
            </p>

            <div className="mt-5 flex flex-wrap gap-4">
              <a
                href="/reports/DataRay-AI-Strategy-Somalia-Report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.20)] transition duration-300 hover:scale-[1.02]"
              >
                Read Publication
              </a>

              <a
                href="/reports/DataRay-AI-Strategy-Somalia-Report.pdf"
                download
                className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition duration-300 hover:bg-slate-50"
              >
                Download PDF
              </a>
            </div>
          </div>

          {/* Publication Card */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_50px_rgba(37,99,235,0.10)]">
            <h2 className="text-xl font-semibold tracking-tight text-slate-950">
              AI and the Future of Work in Africa
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              A research report exploring how artificial intelligence may
              reshape employment patterns, skill demand, and economic
              opportunity across African economies.
            </p>

            <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
              DataRay Research Series · 2026
            </p>

            <button className="mt-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.20)] transition duration-300 hover:scale-[1.02]">
              Read Publication
            </button>
          </div>

          {/* Publication Card */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_50px_rgba(37,99,235,0.10)]">
            <h2 className="text-xl font-semibold tracking-tight text-slate-950">
              Data-Driven Healthcare Systems
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              An analytical report demonstrating how healthcare institutions can
              use predictive analytics and dashboards to monitor disease burden
              and operational performance.
            </p>

            <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
              DataRay Health Analytics Report · 2026
            </p>

            <button className="mt-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.20)] transition duration-300 hover:scale-[1.02]">
              Read Publication
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
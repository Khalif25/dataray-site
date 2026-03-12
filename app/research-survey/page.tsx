export default function ResearchSurveyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-24 text-slate-900">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow">DataRay Research Initiative</p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Demand for Market Intelligence and Strategic Research in Organizations
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            DataRay Smart Solutions is conducting a research survey to understand
            how organizations use market intelligence, strategic research,
            analytics, and decision intelligence in leadership and strategy.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            The survey takes approximately 5 minutes to complete. Your responses
            will contribute to a public research report that will be published in
            the DataRay Insights section.
          </p>
        </div>

        {/* Info Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">Research Focus</p>

            <p className="mt-3 text-sm leading-7 text-slate-700">
              Understanding how organizations use research, analytics,
              dashboards, and intelligence systems in decision-making.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">Participants</p>

            <p className="mt-3 text-sm leading-7 text-slate-700">
              Leaders, managers, analysts, researchers, policy makers,
              development professionals, and institutional decision-makers.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-slate-500">Outcome</p>

            <p className="mt-3 text-sm leading-7 text-slate-700">
              A DataRay research report analyzing how organizations use
              strategic intelligence and data-driven insight.
            </p>
          </div>

        </div>

        {/* Embedded Google Form */}
        <div className="mt-16 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScTiM9kbaAFd8w3x4-txCxPI_RiQYBjqmioEA6r95AucREl9g/viewform?embedded=true"
            width="100%"
            height="1850"
            className="block w-full"
          >
            Loading…
          </iframe>

        </div>

      </div>
    </main>
  );
}
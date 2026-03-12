import Link from "next/link";

export default function Executive_Dashboards_Page() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Service
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Executive Dashboards
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            DataRay designs executive dashboards that turn raw organizational
            data into clear, interactive, decision-ready intelligence. We help
            leaders monitor performance, identify risks, and track priorities in
            one place.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Executive teams often struggle to make decisions quickly because
              critical information is scattered across spreadsheets, reports, and
              disconnected systems. DataRay builds dashboard systems that bring
              together the most important metrics, trends, and operational
              signals into a single visual environment.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Our dashboards are designed for clarity, speed, and usability.
              They help organizations reduce reporting friction, improve
              accountability, and create shared visibility across leadership and
              operational teams.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">What We Build</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Executive KPI dashboards</li>
              <li>• Operational performance dashboards</li>
              <li>• Institutional monitoring dashboards</li>
              <li>• Program and project tracking dashboards</li>
              <li>• Health, education, and NGO reporting dashboards</li>
              <li>• Custom interactive reports for leadership teams</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">Key Benefits</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Faster, more confident decision-making</li>
              <li>• Better visibility into performance and risks</li>
              <li>• Clear communication of key metrics</li>
              <li>• Reduced manual reporting burden</li>
              <li>• Improved accountability across teams</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">Typical Deliverables</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Dashboard design and implementation</li>
              <li>• KPI framework and metric definitions</li>
              <li>• Data cleaning and preparation workflows</li>
              <li>• Documentation and user guidance</li>
              <li>• Optional training for dashboard users</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">How We Work</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">1. Metric Mapping</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We identify the KPIs and reporting needs that matter most to your leadership team.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">2. Data Structuring</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We connect, clean, and prepare data from your available sources.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">3. Dashboard Development</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We build intuitive dashboards with clear visuals, filters, and decision-focused design.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">4. Rollout & Support</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We refine the dashboard and support adoption across your team.
                </p>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold">Best For</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>Leadership teams needing KPI visibility</li>
              <li>Organizations with fragmented reporting</li>
              <li>Institutions managing multiple programs</li>
              <li>Teams wanting real-time performance insight</li>
            </ul>

            <div className="mt-8 rounded-2xl bg-white p-5">
              <h4 className="font-semibold">Need a dashboard system?</h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Let DataRay help you turn reporting into practical executive intelligence.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Start a Project
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";

export default function Advanced_Analytics_Page() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Service
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Advanced Analytics
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            DataRay helps organizations uncover patterns, trends, risks, and
            opportunities hidden inside their data. Our advanced analytics work
            transforms raw information into insight that supports better
            operational, strategic, and policy decisions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Reporting tells you what happened. Advanced analytics helps explain
              why it happened, what influences it, and what actions may improve
              future outcomes. DataRay applies statistical analysis, data
              science methods, and structured analytical workflows to solve
              real-world organizational problems.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Whether the goal is to improve performance, evaluate programs,
              understand trends, or support strategic planning, we build
              analytical systems that move beyond static reporting into deeper
              intelligence.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Our Capabilities</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Statistical analysis and trend exploration</li>
              <li>• Performance and operational analytics</li>
              <li>• Program evaluation and impact analysis</li>
              <li>• Segmentation and pattern detection</li>
              <li>• Decision-support analytics pipelines</li>
              <li>• Custom analytical reporting</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">Problems We Solve</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Unclear performance drivers</li>
              <li>• Limited visibility into operational patterns</li>
              <li>• Difficulty evaluating programs or initiatives</li>
              <li>• Underused organizational data assets</li>
              <li>• Need for stronger evidence in strategy and planning</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">What Clients Receive</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Analytical reports and findings</li>
              <li>• Cleaned and structured datasets</li>
              <li>• Dashboards and visual summaries</li>
              <li>• Actionable recommendations</li>
              <li>• Optional technical documentation</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">How We Work</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">1. Problem Definition</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We define the analytical questions that matter most to your organization.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">2. Data Preparation</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We clean, structure, and validate data for reliable analysis.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">3. Insight Generation</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We apply analytical techniques to uncover meaningful patterns and findings.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">4. Decision Support</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We translate the analysis into practical recommendations and usable outputs.
                </p>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold">Best For</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>Organizations with underused data</li>
              <li>Teams needing deeper insight than reporting alone</li>
              <li>Programs requiring evaluation or trend analysis</li>
              <li>Leaders making data-informed strategic decisions</li>
            </ul>

            <div className="mt-8 rounded-2xl bg-white p-5">
              <h4 className="font-semibold">Need deeper insight?</h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Work with DataRay to turn your data into high-value analytical intelligence.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Request Consultation
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
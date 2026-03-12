import Link from "next/link";

export default function Research_Intelligence_Page() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Service
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Research & Market Intelligence
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            DataRay produces evidence-based research, market intelligence, and
            sector analysis to help organizations understand environments, assess
            opportunities, and make stronger strategic decisions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Strong decisions require more than assumptions. They require
              evidence, context, and structured analysis. DataRay supports
              organizations with research and intelligence services that clarify
              trends, identify risks, and strengthen planning across business,
              institutional, and development settings.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Our work combines analytical thinking, sector awareness, and clear
              communication. We help clients move from scattered information to
              focused understanding and strategic perspective.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Services Include</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Market analysis and industry intelligence</li>
              <li>• Sector and trend research</li>
              <li>• Competitor and landscape analysis</li>
              <li>• Strategic insight reports</li>
              <li>• Policy and institutional research support</li>
              <li>• Evidence-based briefing documents</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">Who This Is For</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Businesses entering or evaluating markets</li>
              <li>• NGOs and development organizations</li>
              <li>• Research institutions and universities</li>
              <li>• Public-sector teams and policy units</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">Deliverables</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Research reports and summaries</li>
              <li>• Market intelligence briefs</li>
              <li>• Strategic sector analyses</li>
              <li>• Visual insight decks and dashboards</li>
              <li>• Recommendations for action or planning</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">How We Work</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">1. Scope Definition</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We define the research questions, audience, and decision context.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">2. Evidence Gathering</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We collect and structure relevant data, sources, and contextual information.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">3. Analysis</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We interpret findings through a strategic and decision-focused lens.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">4. Delivery</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We present the results in clear reports, briefs, or intelligence summaries.
                </p>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold">Best For</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>Organizations needing evidence for strategy</li>
              <li>Teams exploring new sectors or markets</li>
              <li>Institutions requiring research-based planning</li>
              <li>Leaders wanting context behind decisions</li>
            </ul>

            <div className="mt-8 rounded-2xl bg-white p-5">
              <h4 className="font-semibold">Need research support?</h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Partner with DataRay for structured, decision-ready intelligence.
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
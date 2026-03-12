import Link from "next/link";

export default function AI_Strategy_Page() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Service
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            AI Strategy & Advisory
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            DataRay helps organizations move from AI interest to practical
            implementation. We design clear adoption roadmaps, identify the most
            valuable use cases, and align AI initiatives with operational goals,
            data readiness, and long-term organizational capacity.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Many organizations want to use artificial intelligence, but few
              have a structured path for doing so. Without a clear strategy, AI
              efforts often become disconnected pilots that fail to deliver
              meaningful business value. DataRay provides strategic guidance to
              help organizations adopt AI in a practical, responsible, and
              results-oriented way.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Our advisory work focuses on identifying where AI can improve
              efficiency, support decision-making, strengthen service delivery,
              and create long-term competitive advantage. We help clients
              understand what is feasible, what is worth prioritizing, and what
              systems or capabilities must be in place before implementation.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">What We Help With</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• AI opportunity assessment across departments and workflows</li>
              <li>• AI adoption roadmaps and implementation planning</li>
              <li>• Data readiness and infrastructure evaluation</li>
              <li>• Responsible AI and governance recommendations</li>
              <li>• Prioritization of high-value AI use cases</li>
              <li>• Change management and organizational readiness support</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">Who This Is For</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Businesses exploring AI for the first time</li>
              <li>• Institutions seeking structured AI adoption</li>
              <li>• Leadership teams planning digital transformation</li>
              <li>• Organizations that want AI use cases tied to measurable value</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">What Clients Receive</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• AI strategy document tailored to organizational goals</li>
              <li>• Prioritized use-case roadmap</li>
              <li>• Implementation recommendations</li>
              <li>• Risk, governance, and readiness guidance</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">How We Work</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">1. Discovery</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We assess your goals, operational context, data assets, and current challenges.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">2. Prioritization</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We identify the AI opportunities most likely to create practical value.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">3. Strategy Design</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We build a realistic roadmap covering data, tools, process, and governance.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">4. Advisory Support</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We guide your team through implementation planning and capability development.
                </p>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold">Best For</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>Organizations beginning AI adoption</li>
              <li>Leaders seeking a practical roadmap</li>
              <li>Teams evaluating AI readiness</li>
              <li>Institutions needing structured advisory support</li>
            </ul>

            <div className="mt-8 rounded-2xl bg-white p-5">
              <h4 className="font-semibold">Need a strategy session?</h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Discuss your goals, priorities, and opportunities with DataRay.
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
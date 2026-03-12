import NewsletterSignup from "@/components/newsletter-signup";
import Hero from "@/components/hero";
import ServiceCard from "@/components/service-card";

const services = [
  {
    title: "AI Strategy & Advisory",
    description:
      "Roadmaps for AI adoption, workflow redesign, and data maturity for ambitious organizations.",
    href: "/services/ai-strategy",
  },
  {
    title: "Executive Dashboards",
    description:
      "Modern dashboards for leadership teams to monitor KPIs, risks, and opportunities clearly.",
    href: "/services/executive-dashboards",
  },
  {
    title: "Advanced Analytics",
    description:
      "Analysis pipelines that uncover trends, performance patterns, and actionable intelligence.",
    href: "/services/advanced-analytics",
  },
  {
    title: "Research & Market Intelligence",
    description:
      "Evidence-based studies, sector analysis, and strategic insights for institutions and businesses.",
    href: "/services/research-intelligence",
  },
  {
    title: "Predictive Modeling",
    description:
      "Practical machine learning solutions for forecasting, risk scoring, and scenario analysis.",
    href: "/services/predictive-modeling",
  },
  {
    title: "Training Programs",
    description:
      "Professional training in AI, analytics, dashboards, and data literacy for teams and institutions.",
    href: "/services/training-programs",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <main className="bg-slate-50 text-slate-900">
        {/* Services Section */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow">Services</p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              What DataRay helps organizations do
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              From analytics and AI strategy to dashboards, research, and training,
              DataRay is designed to operate like a modern intelligence firm.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Decision Intelligence Showcase */}
        <section className="border-t border-slate-200 bg-white px-6 py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="eyebrow">Decision Intelligence Showcase</p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                See how DataRay turns data into executive-ready decisions
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                DataRay combines analytics, visualization, research, and practical AI
                into systems that help leaders monitor performance, identify risks,
                interpret change, and act with confidence.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                  <p className="text-sm font-medium text-slate-500">Dashboards</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950">
                    KPI visibility for leaders
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Clear visual systems for monitoring operations, outcomes, and strategic priorities.
                  </p>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                  <p className="text-sm font-medium text-slate-500">Research Intelligence</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950">
                    Evidence behind strategy
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Structured analysis that helps decision-makers move beyond instinct and noise.
                  </p>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                  <p className="text-sm font-medium text-slate-500">Predictive Insight</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950">
                    Forward-looking signals
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Forecasting and scenario analysis that support proactive planning and risk awareness.
                  </p>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                  <p className="text-sm font-medium text-slate-500">Communication</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950">
                    Insight people can use
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Reports, visuals, and intelligence outputs designed to be understood and acted on.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)]">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-400">
                      Decision Intelligence Interface
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-white">
                      Strategic Operations View
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                    Live
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Risk Alert Index</p>
                    <p className="mt-3 text-3xl font-semibold text-white">Low</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Decision Confidence</p>
                    <p className="mt-3 text-3xl font-semibold text-white">89%</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-slate-400">Priority Signals</p>
                      <p className="text-xs text-slate-500">Updated continuously</p>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
                          <span>Operational performance</span>
                          <span>78%</span>
                        </div>
                        <div className="h-3 w-full rounded-full bg-white/10">
                          <div className="h-3 w-[78%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                        </div>
                      </div>

                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
                          <span>Research confidence</span>
                          <span>84%</span>
                        </div>
                        <div className="h-3 w-full rounded-full bg-white/10">
                          <div className="h-3 w-[84%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                        </div>
                      </div>

                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs text-slate-500">
                          <span>Forecast readiness</span>
                          <span>69%</span>
                        </div>
                        <div className="h-3 w-full rounded-full bg-white/10">
                          <div className="h-3 w-[69%] rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                    <p className="text-sm text-slate-400">Recommended Action</p>
                    <p className="mt-3 text-base leading-7 text-slate-200">
                      Strengthen executive dashboard visibility, prioritize strategic
                      research inputs, and monitor leading indicators for early intervention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 top-8 -z-10 h-28 w-28 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="absolute -right-6 bottom-6 -z-10 h-32 w-32 rounded-full bg-blue-500/15 blur-3xl" />
            </div>
          </div>
        </section>

        {/* Sector Solutions */}
        <section className="border-t border-slate-200 bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="eyebrow">Sector Solutions</p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Built for the sectors where better intelligence creates better decisions
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                DataRay’s services are designed to adapt across public institutions,
                development organizations, businesses, academic environments, and healthcare systems.
                Each sector faces different decision pressures, reporting demands, and data
                challenges — and each requires the right mix of analytics, dashboards,
                research, and strategic insight.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_50px_rgba(37,99,235,0.10)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                  G
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  Government
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Policy intelligence dashboards, program monitoring systems, sector
                  research, and data-driven planning support for public decision-making.
                </p>

                <ul className="mt-5 space-y-2 text-sm text-slate-500">
                  <li>• Performance dashboards</li>
                  <li>• Policy and sector analysis</li>
                  <li>• Program monitoring</li>
                </ul>
              </div>

              <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_50px_rgba(37,99,235,0.10)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-semibold text-cyan-700">
                  N
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  NGOs
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Impact monitoring systems, research analytics, reporting dashboards,
                  and evidence frameworks that strengthen program oversight and donor communication.
                </p>

                <ul className="mt-5 space-y-2 text-sm text-slate-500">
                  <li>• M&amp;E dashboards</li>
                  <li>• Impact analytics</li>
                  <li>• Research-backed reporting</li>
                </ul>
              </div>

              <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_50px_rgba(37,99,235,0.10)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-sm font-semibold text-blue-700">
                  B
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  Businesses
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Executive dashboards, forecasting models, market intelligence, and
                  operational analytics that help leaders manage risk and identify growth opportunities.
                </p>

                <ul className="mt-5 space-y-2 text-sm text-slate-500">
                  <li>• KPI dashboards</li>
                  <li>• Forecasting models</li>
                  <li>• Market intelligence</li>
                </ul>
              </div>

              <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_50px_rgba(37,99,235,0.10)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-sm font-semibold text-indigo-700">
                  U
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  Universities
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Research analytics, institutional dashboards, training programs, and
                  evidence systems that support academic planning and data-informed administration.
                </p>

                <ul className="mt-5 space-y-2 text-sm text-slate-500">
                  <li>• Institutional dashboards</li>
                  <li>• Research analytics</li>
                  <li>• Capacity-building training</li>
                </ul>
              </div>

              <div className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_50px_rgba(37,99,235,0.10)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-sm font-semibold text-red-700">
                  H
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  Healthcare
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Data-driven systems that help healthcare leaders monitor outcomes,
                  allocate resources effectively, and anticipate public health risks.
                </p>

                <ul className="mt-5 space-y-2 text-sm text-slate-500">
                  <li>• Hospital performance dashboards</li>
                  <li>• Disease trend analytics</li>
                  <li>• Patient flow and capacity modeling</li>
                  <li>• Health program monitoring systems</li>
                  <li>• Predictive risk modeling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why DataRay Section */}
        <section className="border-t border-slate-200 bg-white px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="eyebrow">Why DataRay</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Built for decision-makers who need clarity, not noise
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                DataRay combines analytics, research, and practical AI into systems that
                help organizations make stronger decisions, communicate insights clearly,
                and act with confidence.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-950">Executive Focus</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Outputs designed for leadership teams, project owners, and institutional decision-makers.
                </p>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-950">Practical AI</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  AI applied where it creates measurable value, not where it only sounds impressive.
                </p>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-950">Clear Communication</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Dashboards, reports, and insight systems built to be readable, actionable, and trusted.
                </p>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-950">Scalable Systems</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Solutions that support growth across business operations, research work, and public-sector use cases.
                </p>
              </div>
            </div>
          </div>
        </section>

        <NewsletterSignup />

        {/* Research Initiative Section */}
        <section className="border-t border-slate-200 bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <div className="grid gap-10 px-8 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-12">
                <div>
                  <p className="eyebrow">Current Research Initiative</p>

                  <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    Demand for Market Intelligence and Strategic Research in Organizations
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                    DataRay is conducting a research survey to understand how organizations
                    use market intelligence, strategic research, and data-driven insight in
                    decision-making.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="/research-survey"
                      className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                    >
                      Participate in the Survey
                    </a>

                    <a
                      href="/insights"
                      className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
                    >
                      Explore Insights
                    </a>
                  </div>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Research Status</p>
                      <h3 className="mt-1 text-xl font-semibold text-slate-950">
                        Survey Now Open
                      </h3>
                    </div>

                    <div className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                      Live
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700">Collection progress</span>
                      <span className="text-slate-500">Early stage</span>
                    </div>

                    <div className="h-3 w-full rounded-full bg-slate-200">
                      <div className="h-3 w-[24%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Responses are being collected for DataRay’s first public research report.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm text-slate-500">Focus</p>
                      <p className="mt-2 text-sm font-medium leading-6 text-slate-900">
                        Strategic intelligence, research use, and decision-making practices
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-sm text-slate-500">Publication</p>
                      <p className="mt-2 text-sm font-medium leading-6 text-slate-900">
                        Research report coming soon in the Insights section
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
                    <p className="text-sm font-medium text-cyan-300">Why it matters</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      This initiative helps identify how organizations use evidence,
                      where research gaps exist, and what strategic support leaders need most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
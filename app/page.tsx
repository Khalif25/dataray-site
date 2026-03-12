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
                    decision-making. The findings will inform an upcoming publication on how
                    leaders balance research, analytics, and intuition.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="PASTE_YOUR_GOOGLE_FORM_LINK_HERE"
                      target="_blank"
                      rel="noopener noreferrer"
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
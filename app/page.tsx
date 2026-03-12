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
      </main>
    </>
  );
}
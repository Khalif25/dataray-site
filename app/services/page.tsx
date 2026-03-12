import Link from "next/link";
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

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            DataRay services for organizations that need clarity, intelligence, and practical execution
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            DataRay provides AI advisory, dashboard systems, analytics, predictive
            modeling, research intelligence, and professional training to help
            organizations make stronger decisions and build long-term capability.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Practical services built around real organizational needs
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Our work is designed to be useful, measurable, and aligned with how
              institutions and businesses actually operate. We focus on turning
              data, evidence, and technology into outputs that leaders can use.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-950">Diagnose</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We assess the problem, context, and current systems before proposing solutions.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-950">Design</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We structure dashboards, analytics, research, or training around your goals.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-950">Deliver</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We create outputs that are decision-ready, usable, and clearly communicated.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-950">Support</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We help clients adopt, interpret, and build confidence in the systems we develop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-slate-950 px-8 py-10 text-white sm:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Start a Project
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Looking for a partner in AI, analytics, dashboards, or research intelligence?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            DataRay works with organizations that want practical systems, sharper insight,
            and stronger decision-making capacity.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
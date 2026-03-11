import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import { services, trainingPrograms } from "@/lib/data";

export default function ServicesPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="High-impact services for a modern AI and analytics firm"
          description="DataRay provides strategic, analytical, and capability-building services designed for organizations that want better decisions, stronger visibility, and practical AI adoption."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <section className="mt-20 border-t border-white/10 pt-20">
          <SectionHeading
            eyebrow="Training Programs"
            title="Programs that convert expertise into trust"
            description="Training helps DataRay demonstrate real capability while opening the door to longer-term consulting, dashboard, and analytics engagements."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {trainingPrograms.map((program) => (
              <div key={program.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-300">
                  {program.audience}
                </p>
                <h3 className="mt-3 text-xl font-medium text-white">{program.title}</h3>
                <p className="mt-3 leading-7 text-neutral-300">{program.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">Need a tailored solution?</h2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              DataRay can combine research, analytics, dashboards, predictive modeling, and training into a customized engagement for your organization.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
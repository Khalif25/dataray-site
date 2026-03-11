import Link from "next/link";
import Hero from "@/components/hero";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import InsightCard from "@/components/insight-card";
import { services, trainingPrograms, insights } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="border-t border-black/5 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="What DataRay helps organizations do"
            description="From analytics and AI strategy to dashboards, research, and training, DataRay is designed to operate like a modern intelligence firm."
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
        </div>
      </section>

      <section className="border-t border-black/5 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why DataRay"
            title="A research-led and intelligence-driven consulting identity"
            description="DataRay combines analytics, dashboards, AI strategy, and research into one modern service brand. The goal is not just technical delivery, but usable intelligence for leaders and institutions."
          />
        </div>
      </section>

      <section className="border-t border-black/5 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Training Programs"
            title="Capability-building programs that strengthen trust"
            description="Training is one of the most powerful ways to build visibility, credibility, and lasting institutional relationships."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {trainingPrograms.map((program) => (
              <div
                key={program.title}
                className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-blue-500">
                  {program.audience}
                </p>
                <h3 className="mt-3 text-xl font-medium text-black">{program.title}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{program.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-semibold text-black sm:text-4xl">
            Ready to turn data into strategic advantage?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
            Talk to DataRay about dashboards, analytics, AI strategy, research studies, or training programs.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
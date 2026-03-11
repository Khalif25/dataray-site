import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-blue-300">
              Modern AI, Analytics & Intelligence
            </p>
            <h1 className="text-5xl font-semibold leading-tight sm:text-6xl">
              Data-driven intelligence for organizations that want to move with clarity.
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              DataRay helps businesses, institutions, and public-sector teams turn complex
              data into executive dashboards, strategic research, predictive insight, and
              practical AI solutions.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/services"
                className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold">What DataRay Does</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              "AI Strategy & Advisory",
              "Executive Dashboards",
              "Advanced Analytics",
              "Research & Market Intelligence",
              "Predictive Modeling",
              "Training Programs",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-medium">{item}</h3>
                <p className="mt-3 text-neutral-300">
                  Premium analytical and strategic services designed for modern decision-makers.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl max-w-3xl">
          <h2 className="text-3xl font-semibold">Why DataRay</h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            DataRay combines analytics, research, dashboard thinking, and AI strategy into
            one modern service brand. The goal is not only to provide technical work, but to
            turn information into usable intelligence for leaders and institutions.
          </p>
        </div>
      </section>
    </main>
  );
}
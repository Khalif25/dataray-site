export default function AboutPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <section className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            About
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Data-driven intelligence for modern organizations
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            DataRay is an AI-driven analytics and intelligence firm that helps
            organizations transform complex data into clearer strategy, better
            decisions, and stronger execution. We combine analytics, dashboards,
            research, and AI thinking into one modern service platform.
          </p>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
              What DataRay Is
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-black">
              A strategic analytics and intelligence partner
            </h2>
            <p className="mt-4 leading-8 text-neutral-600">
              DataRay is built to help organizations move beyond raw data and
              fragmented reporting. The goal is to turn information into
              decision-ready intelligence through practical analytics systems,
              dashboards, predictive thinking, and research-based insight.
            </p>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
              Who We Serve
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-black">
              Organizations that need clarity, insight, and better decisions
            </h2>
            <ul className="mt-4 space-y-3 leading-8 text-neutral-600">
              <li>• Businesses and startups</li>
              <li>• NGOs and development organizations</li>
              <li>• Universities and research institutions</li>
              <li>• Public-sector and policy-focused teams</li>
              <li>• Leaders building data-driven systems</li>
            </ul>
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
              Mission
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-black">
              From data overload to decision clarity
            </h2>
            <p className="mt-4 leading-8 text-neutral-600">
              Our mission is to help organizations make better decisions through
              practical intelligence systems. That means clearer reporting,
              stronger analytics, better research, more effective training, and
              a more thoughtful use of AI in real-world environments.
            </p>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
              Why DataRay Is Different
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-black">
              Beyond tools, toward intelligence systems
            </h2>
            <p className="mt-4 leading-8 text-neutral-600">
              Many firms focus only on technology or one-off reporting. DataRay
              focuses on the full decision system: the data, the dashboards, the
              analysis, the research, and the strategic meaning behind them. We
              aim to deliver not just outputs, but insight that leaders can
              actually use.
            </p>
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            Core Capabilities
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                className="rounded-2xl border border-black/5 bg-neutral-50 px-5 py-4 text-sm font-medium text-black"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Build smarter systems with DataRay
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
            Whether you need analytics, dashboards, research, or AI strategy,
            DataRay is designed to help you turn complexity into clarity.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Contact DataRay
          </a>
        </section>
      </div>
    </main>
  );
}
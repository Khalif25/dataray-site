export default function AboutPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <section className="max-w-4xl">
       <p className="text-sm font-semibold text-blue-600">
  About DataRay
</p>

<h2 className="mt-4 text-2xl font-semibold tracking-tight text-black">
  Building the intelligence systems that power better decisions.
</h2>

<p className="mt-4 leading-8 text-neutral-600">
  DataRay Smart Solutions is an AI-driven analytics and data intelligence company focused on transforming how organizations use data to make decisions. We work with governments, NGOs, healthcare institutions, and businesses to design systems that turn complex data into clear, actionable insight.
</p>

<p className="mt-4 leading-8 text-neutral-600">
  Our approach goes beyond dashboards and reporting. We build integrated decision intelligence systems that combine data pipelines, analytics, research, and strategic interpretation, ensuring that insights are not only generated, but understood and applied in real-world environments.
</p>

<p className="mt-4 leading-8 text-neutral-600">
  At the core of DataRay is a belief that technology alone is not enough. Sustainable impact requires both intelligent systems and the people who can use them. Through our national AI and data literacy initiative, we are developing a new generation of data-literate professionals while building the analytical infrastructure needed for long-term transformation.
</p>

<p className="mt-4 leading-8 text-neutral-600">
  By connecting AI, analytics, research, and human capacity, DataRay is building the foundation for smarter, more informed decision-making in Somalia and across Africa.
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
             DataRay is built to help organizations move beyond raw data and fragmented reporting toward integrated, decision-ready intelligence. 
             We design and deliver AI-powered analytics systems, interactive dashboards, and research-driven insights that support real-world decision-making. 
             Our approach combines technology, analytical thinking, and human capacity development to ensure that data is not only processed, 
             but understood, trusted, and applied effectively. By connecting data, tools, and people, we enable institutions to make smarter, faster,
             and more strategic decisions in complex environments.
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
  Powering Somalia’s and next generation of intelligent decisions through AI, data, and human capital.
            </h2>
            <p className="mt-4 leading-8 text-neutral-600">
              Our mission is to bridge the gap between data and decision-making by developing AI-powered systems,
               analytical platforms, and skilled talent capable of solving real-world challenges. 
               We work at the intersection of technology, research, and human capacity to ensure that data is not just collected,
              but translated into meaningful insight, strategic action, and measurable impact across institutions and industries.
            </p>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
              Why DataRay Is Different
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-black">
              Building intelligence systems,and the people who power them.

            </h2>
            <p className="mt-4 leading-8 text-neutral-600">

              DataRay goes beyond traditional analytics by combining technology with human capital development. 
              While many firms focus only on tools or reporting, we build end-to-end intelligence systems supported by trained talent and real-world application. 
            Through our integrated model-linking AI solutions, research, and national capacity building,we ensure that data systems are not only delivered,
             but actively used, scaled, and embedded within organizations. The result is sustainable, long-term decision intelligence rather than short-term outputs.
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
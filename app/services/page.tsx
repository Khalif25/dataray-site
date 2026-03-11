export default function ServicesPage() {
  const services = [
    {
      title: "AI Strategy & Advisory",
      desc: "Helping organizations understand where AI creates real value and how to implement it responsibly.",
    },
    {
      title: "Executive Dashboards",
      desc: "Modern dashboards that allow leaders to monitor KPIs, trends, and operational performance in real time.",
    },
    {
      title: "Advanced Analytics",
      desc: "Transforming raw data into insight using statistical analysis, data pipelines, and visualization.",
    },
    {
      title: "Research & Market Intelligence",
      desc: "Data-driven research reports and sector analysis for institutions and organizations.",
    },
    {
      title: "Predictive Modeling",
      desc: "Machine learning models that forecast trends, risks, and future outcomes using data.",
    },
    {
      title: "Training Programs",
      desc: "Professional training in AI, data analytics, dashboards, and data-driven decision making.",
    },
  ];

  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-blue-400">
            DataRay Services
          </p>

          <h1 className="text-4xl font-semibold sm:text-5xl">
            Intelligence, analytics, and AI services for modern organizations.
          </h1>

          <p className="mt-6 text-lg text-neutral-400">
            DataRay combines research, analytics, and AI thinking to help
            organizations make better strategic decisions using data.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>

              <p className="mt-3 text-neutral-400">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function Training_Programs_Page() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Service
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Training Programs
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            DataRay delivers professional training programs in AI, analytics,
            dashboards, and data literacy. We help organizations build internal
            capability so teams can understand, use, and apply data more
            effectively in real-world work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Technology is only valuable when people know how to use it
              effectively. DataRay offers practical training designed to improve
              data confidence, analytical capability, and modern decision-making
              skills across teams and institutions.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Our programs combine conceptual understanding with hands-on
              examples, real-world tasks, and practical tools. We can train
              executive audiences, analysts, technical staff, and institutional
              teams depending on the level and objective required.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Training Areas</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Data analytics and interpretation</li>
              <li>• Dashboard use and dashboard development</li>
              <li>• AI and machine learning fundamentals</li>
              <li>• Data literacy for managers and decision-makers</li>
              <li>• Research and evidence-use skills</li>
              <li>• Python, BI tools, and practical analytics workflows</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">Formats</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• On-site workshops</li>
              <li>• Virtual training sessions</li>
              <li>• Short executive programs</li>
              <li>• Multi-session institutional training</li>
              <li>• Customized capacity-building engagements</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">Outcomes</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Stronger analytical confidence across teams</li>
              <li>• Better use of dashboards and reports</li>
              <li>• Improved data-driven decision culture</li>
              <li>• More effective interpretation of evidence</li>
              <li>• Internal capability for long-term growth</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">How We Work</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">1. Needs Assessment</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We identify the audience, skill level, and capability goals.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">2. Program Design</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We tailor the content, format, and examples to your organizational context.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">3. Delivery</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We conduct hands-on sessions focused on understanding and practical application.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">4. Reinforcement</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We provide materials, follow-up guidance, and optional support for continued learning.
                </p>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold">Best For</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>Organizations building analytical capacity</li>
              <li>Teams adopting dashboards or AI tools</li>
              <li>Institutions needing structured staff development</li>
              <li>Leaders who want stronger data literacy across teams</li>
            </ul>

            <div className="mt-8 rounded-2xl bg-white p-5">
              <h4 className="font-semibold">Need a training program?</h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Work with DataRay to build data, analytics, and AI capability inside your organization.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Start a Project
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
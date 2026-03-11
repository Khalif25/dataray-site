import { siteConfig } from "@/lib/data";

export default function ContactPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <section className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Discuss your data, analytics, or AI project with DataRay
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Whether you need dashboards, analytics systems, research support,
            training, or AI strategy, DataRay helps turn complex information
            into practical intelligence and better decisions.
          </p>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-black">
              Send an inquiry
            </h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Tell us what you are trying to solve, what kind of support you
              need, and the type of organization you represent.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-neutral-700">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-black/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-black/20"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-neutral-700">
                    Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Organization name"
                    className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-black/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700">
                    Service of interest
                  </label>
                  <select className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-black/20">
                    <option>AI Strategy & Advisory</option>
                    <option>Executive Dashboards</option>
                    <option>Advanced Analytics</option>
                    <option>Research & Market Intelligence</option>
                    <option>Predictive Modeling</option>
                    <option>Training Programs</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700">
                  Project details
                </label>
                <textarea
                  rows={6}
                  placeholder="Describe your project, challenge, or what you would like DataRay to help with."
                  className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-black/20"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Send inquiry
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                Best For
              </p>
              <ul className="mt-4 space-y-3 leading-7 text-neutral-600">
                <li>• Organizations that need executive dashboards</li>
                <li>• Teams exploring AI strategy or adoption</li>
                <li>• Institutions seeking research and analytics support</li>
                <li>• Leaders who want data-driven decision systems</li>
                <li>• Groups interested in professional training programs</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                Why Contact DataRay
              </p>
              <p className="mt-4 leading-8 text-neutral-600">
                DataRay combines analytics, dashboards, research, and AI
                strategy into one modern intelligence service. The aim is not
                just technical delivery, but clearer decisions and stronger
                execution.
              </p>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                Direct Contact
              </p>
              <p className="mt-4 text-neutral-600">
                Email:
                <span className="ml-2 font-medium text-black">
                  {siteConfig.email}
                </span>
              </p>
              <p className="mt-2 text-neutral-600">
                Location:
                <span className="ml-2 font-medium text-black">
                  {siteConfig.location}
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
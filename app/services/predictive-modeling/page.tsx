import Link from "next/link";

export default function Predictive_Modeling_Page() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
            Service
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Predictive Modeling
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            DataRay builds predictive models that help organizations forecast
            trends, estimate risk, and make proactive decisions. We use
            statistical and machine learning methods to turn historical data into
            forward-looking insight.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Predictive modeling helps organizations move beyond reactive
              decision-making. Instead of only analyzing past performance,
              predictive systems estimate what is likely to happen next and where
              attention should be focused.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              DataRay develops practical models for forecasting, risk scoring,
              classification, and scenario analysis. Our approach emphasizes
              reliability, interpretability, and business relevance rather than
              technical complexity for its own sake.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Applications</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Demand and trend forecasting</li>
              <li>• Risk prediction and scoring</li>
              <li>• Public health and social outcome modeling</li>
              <li>• Customer or user behavior prediction</li>
              <li>• Early-warning systems and alerts</li>
              <li>• Scenario simulation for planning</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">Benefits</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Better planning and resource allocation</li>
              <li>• Earlier detection of potential risks</li>
              <li>• Stronger strategic forecasting capacity</li>
              <li>• Evidence-based decision support</li>
              <li>• More proactive operations and interventions</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">What Clients Receive</h2>
            <ul className="mt-5 space-y-3 text-slate-600">
              <li>• Predictive model development</li>
              <li>• Forecast outputs and performance summaries</li>
              <li>• Dashboard or visualization integration</li>
              <li>• Technical explanation and documentation</li>
              <li>• Recommendations for deployment or use</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">How We Work</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">1. Problem Framing</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We define the target outcome, forecasting horizon, and decision use case.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">2. Data Preparation</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We clean, structure, and engineer features from the available data.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">3. Model Development</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We train, evaluate, and refine models based on reliability and usefulness.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold">4. Delivery & Use</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  We deliver results in a usable form, often with dashboards or decision-support outputs.
                </p>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold">Best For</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>Organizations needing forecasting capability</li>
              <li>Teams assessing operational or program risk</li>
              <li>Institutions planning around future demand</li>
              <li>Leaders wanting proactive decision support</li>
            </ul>

            <div className="mt-8 rounded-2xl bg-white p-5">
              <h4 className="font-semibold">Need predictive insight?</h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Let DataRay help you build forward-looking models that support smarter planning.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Request Consultation
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
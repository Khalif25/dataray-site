import Link from "next/link";

export default function SomaliSocialStabilityAIPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="eyebrow">Strategic AI Project</p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Somali Social Stability AI (SSAI)
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              A strategic National AI initiative focused on detecting harmful
              Somali-language content, reducing digital incitement, and
              strengthening social stability through responsible language
              intelligence systems.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-slate-200 bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-10">
            {/* Overview */}
            <div className="service-card">
              <h2 className="text-2xl font-semibold text-slate-950">
                Project Overview
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Somali Social Stability AI project is designed to identify
                harmful patterns in Somali digital content, including hate
                speech, tribal incitement, political misinformation, and
                violence-triggering language. The project combines language
                technology, responsible AI, and social stability analysis to
                support peacebuilding, media responsibility, and early-warning
                systems.
              </p>
            </div>

            {/* How it works */}
            <div className="service-card">
              <h2 className="text-2xl font-semibold text-slate-950">
                How It Works
              </h2>

              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600">
                    Phase 1: Build labeled dataset
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    The first stage is to build a high-quality Somali-language
                    dataset with clearly defined content categories including
                    neutral content, hate speech, tribal incitement, political
                    misinformation, and violence-triggering content. University
                    students can support labeling through structured annotation
                    workflows.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Neutral",
                      "Hate speech",
                      "Tribal incitement",
                      "Political misinformation",
                      "Violence-triggering content",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-600">
                    Phase 2: Train classification model
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    Transformer-based models such as BERT can be fine-tuned on
                    Somali text to classify harmful content. This enables the
                    system to understand context and detect risk signals in
                    digital discourse.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-blue-600">
                    Phase 3: Deploy system
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    The system can be deployed as an API for Facebook pages,
                    media companies, and community platforms. It can flag risky
                    content and suggest neutral rephrasing in real time.
                  </p>
                </div>
              </div>
            </div>

            {/* Advanced */}
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-2xl font-semibold text-slate-950">
                Advanced Layer: Conflict Risk Index
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                A powerful extension of SSAI is the development of a Conflict
                Risk Index. This system detects rising hate trends, geographic
                hotspots, and language linked to violence, enabling early
                intervention.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Rising hate trends",
                    desc: "Track increases in dangerous language patterns.",
                  },
                  {
                    title: "Geographic hotspots",
                    desc: "Identify regions with rising digital risk.",
                  },
                  {
                    title: "Violence-linked keywords",
                    desc: "Detect clusters of harmful phrases.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <h3 className="font-medium text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="service-card">
              <h2 className="text-lg font-semibold text-slate-950">
                Why It Matters
              </h2>

              <p className="mt-3 text-slate-600">
                SSAI provides institutions with visibility into harmful digital
                narratives before they translate into real-world instability.
              </p>
            </div>

            <div className="service-card">
              <h2 className="text-lg font-semibold text-slate-950">
                Potential Beneficiaries
              </h2>

              <div className="mt-4 space-y-3">
                {[
                  "Government institutions",
                  "NGOs and civil society organizations",
                  "Peacebuilding organizations",
                  "Media companies",
                  "Digital community platforms",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="service-card">
              <h2 className="text-lg font-semibold text-slate-950">
                Strategic Direction
              </h2>

              <p className="mt-3 text-slate-600">
                This initiative reflects DataRay’s broader mission of using AI,
                data, and intelligence systems to support stronger institutions
                and better decision-making.
              </p>

              <Link
                href="/contact"
                className="hero-primary-button mt-5 inline-block"
              >
                Discuss the Project
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";

export default function SomaliSocialStabilityAIPage() {
  return (
    <main className="min-h-screen bg-[#06152D] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),linear-gradient(180deg,#0a1b36_0%,#06152D_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300/80">
              Strategic AI Project
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Somali Social Stability AI (SSAI)
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A strategic National AI initiative focused on detecting harmful Somali-language
              content, reducing digital incitement, and strengthening social
              stability through responsible language intelligence systems.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="space-y-10">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
              <h2 className="text-2xl font-semibold text-white">
                Project Overview
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                Somali Social Stability AI project is designed to identify harmful patterns
                in Somali digital content, including hate speech, tribal incitement,
                political misinformation, and violence-triggering language. The
                project combines language technology, responsible AI, and social
                stability analysis to support peacebuilding, media responsibility,
                and early-warning systems.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
              <h2 className="text-2xl font-semibold text-white">
                How It Works
              </h2>

              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-200">
                    Step 1 : Build labeled dataset
                  </h3>
                  <p className="mt-3 leading-8 text-slate-300">
                    The first stage is to build a high-quality Somali-language dataset
                    with clearly defined content categories. These categories will
                    include neutral content, hate speech, tribal incitement,
                    political misinformation, and violence-triggering content.
                    University students and trained research assistants are expected support
                    the labeling process through structured annotation workflows.
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
                        className="rounded-2xl border border-cyan-400/10 bg-[#0b1c39] px-4 py-3 text-sm text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-200">
                    Step 2: Train classification model
                  </h3>
                  <p className="mt-3 leading-8 text-slate-300">
                    The next stage is model development. Transformer-based models,
                    including BERT-like architectures, can be fine-tuned on Somali
                    text to classify harmful content with increasing accuracy. This
                    enables the system to recognize language patterns, context, and
                    risk signals relevant to Somali online discourse.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-200">
                    Step 3 : Deploy system
                  </h3>
                  <p className="mt-3 leading-8 text-slate-300">
                    Once trained, the model will be deployed as an API for practical
                    use across Facebook pages, media companies, community forums,
                    and digital platforms. In real time, the system can flag risky
                    content and even suggest more neutral rephrasings to reduce the
                    spread of inflammatory language.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/10 bg-[linear-gradient(180deg,rgba(34,211,238,0.07),rgba(255,255,255,0.02))] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
              <h2 className="text-2xl font-semibold text-white">
                Advanced Layer : Conflict Risk Index
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                A powerful extension of SSAI is the development of a Conflict Risk
                Index. This layer will analyze trends over time and detect emerging
                patterns in hate speech, tribal escalation, geographic hotspots, and
                language linked to violence. Instead of responding only after harm
                spreads, institutions can use the system for earlier intervention
                and prevention.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-[#0b1c39] p-4">
                  <h3 className="font-medium text-white">Rising hate trends</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Track increases in dangerous language patterns over time.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1c39] p-4">
                  <h3 className="font-medium text-white">Geographic hotspots</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Identify regions or communities where digital risk signals are rising.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1c39] p-4">
                  <h3 className="font-medium text-white">Violence-linked keywords</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Detect clusters of phrases associated with escalating conflict.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
              <h2 className="text-xl font-semibold text-white">
                Why It Matters
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                SSAI can become an extremely valuable system for institutions that
                need better visibility into harmful digital narratives before they
                translate into real-world instability.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
              <h2 className="text-xl font-semibold text-white">
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
                    className="rounded-2xl border border-white/10 bg-[#0b1c39] px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/10 bg-[linear-gradient(180deg,rgba(34,211,238,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.18)]">
              <h2 className="text-xl font-semibold text-white">
                Strategic Direction
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                This initiative reflects DataRay’s broader mission of using AI,
                data, and intelligence systems to support stronger institutions,
                better decision-making, and more stable futures.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-white/10"
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
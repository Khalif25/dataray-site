import Link from "next/link";
import { academyTracks, getProgramsByTrack } from "@/lib/data";

export default function AcademyProgramsPage() {
  return (
    <main className="min-h-screen bg-[#020817] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            DataRay Academy
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            Training Programs
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Structured institutional pathways designed for organizations seeking
            practical capability building in data, analytics, visualization, and AI.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {academyTracks.map((track) => {
            const programs = getProgramsByTrack(track.slug);

            if (programs.length === 0) return null;

            return (
              <section key={track.slug}>
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold">{track.pathwayTitle}</h2>
                  <p className="mt-3 text-slate-400">{track.pathwayDescription}</p>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {programs.map((program) => (
                    <div
                      key={program.slug}
                      className="rounded-[24px] border border-white/10 bg-white/5 p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-semibold">{program.title}</h3>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            program.status === "available"
                              ? "border border-cyan-300/20 bg-cyan-400/10 text-cyan-100"
                              : "border border-amber-300/20 bg-amber-400/10 text-amber-100"
                          }`}
                        >
                          {program.status === "available" ? "Available" : "Coming soon"}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-6 text-slate-400">
                        {program.description}
                      </p>

                      <div className="mt-6 grid gap-3">
                        <div>
                          <p className="text-sm text-slate-500">Pathway</p>
                          <p className="text-sm font-medium text-slate-200">
                            {track.pathwayTitle}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Audience</p>
                          <p className="text-sm font-medium text-slate-200">
                            {program.audience}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Duration</p>
                          <p className="text-sm font-medium text-slate-200">
                            {program.duration}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Format</p>
                          <p className="text-sm font-medium text-slate-200">
                            {program.format}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-sm font-medium text-slate-300">
                          Program highlights
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-slate-400">
                          {program.highlights.map((highlight) => (
                            <li key={highlight}>• {highlight}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8">
                        <Link
                          href="/contact"
                          className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                        >
                          Request training
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
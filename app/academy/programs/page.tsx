import Link from "next/link";
import { academyTracks, getProgramsByTrack } from "@/lib/data";

export default function AcademyProgramsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="eyebrow">DataRay Academy</p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Training Programs
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Structured institutional pathways designed for organizations
            seeking practical capability building in data, analytics,
            visualization, and AI.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {academyTracks.map((track) => {
            const programs = getProgramsByTrack(track.slug);

            if (programs.length === 0) return null;

            return (
              <section key={track.slug}>
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {track.pathwayTitle}
                  </h2>

                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {track.pathwayDescription}
                  </p>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {programs.map((program) => (
                    <div
                      key={program.slug}
                      className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_50px_rgba(37,99,235,0.10)]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                          {program.title}
                        </h3>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            program.status === "available"
                              ? "border border-cyan-200 bg-cyan-50 text-cyan-700"
                              : "border border-amber-200 bg-amber-50 text-amber-700"
                          }`}
                        >
                          {program.status === "available"
                            ? "Available"
                            : "Coming soon"}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {program.description}
                      </p>

                      <div className="mt-6 grid gap-3">
                        <div>
                          <p className="text-sm text-slate-500">Pathway</p>
                          <p className="text-sm font-medium text-slate-900">
                            {track.pathwayTitle}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm text-slate-500">Audience</p>
                          <p className="text-sm font-medium text-slate-900">
                            {program.audience}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm text-slate-500">Duration</p>
                          <p className="text-sm font-medium text-slate-900">
                            {program.duration}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm text-slate-500">Format</p>
                          <p className="text-sm font-medium text-slate-900">
                            {program.format}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-sm font-medium text-slate-800">
                          Program highlights
                        </p>

                        <ul className="mt-3 space-y-2 text-sm text-slate-600">
                          {program.highlights.map((highlight) => (
                            <li key={highlight}>• {highlight}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8">
                        <Link
                          href="/contact"
                          className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 transition duration-300 hover:bg-slate-50"
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
import Link from "next/link";
import {
  academyTracks,
  academyCourses,
  getCoursesByTrack,
  getProgramsByTrack,
} from "@/lib/data";

const featuredCourse = academyCourses.find((course) => course.slug === "ml");

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-[#020817] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            DataRay Academy
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Structured learning in data, analytics, and AI
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            DataRay Academy supports both individual learners and institutions through
            public courses and structured training programs across three capability
            layers: Data Foundations, Applied Analytics & Visualization, and
            AI & Advanced Data Science.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/academy/courses"
            className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
          >
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300/80">
              For individuals
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Courses</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Public course pages with overviews, objectives, modules, duration,
              level, and learning progression.
            </p>
            <p className="mt-5 text-sm font-medium text-cyan-300">Explore courses →</p>
          </Link>

          <Link
            href="/academy/programs"
            className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
          >
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300/80">
              For organizations
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Training Programs</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Institutional pathways for NGOs, businesses, healthcare teams,
              and public-sector organizations.
            </p>
            <p className="mt-5 text-sm font-medium text-cyan-300">View training programs →</p>
          </Link>
        </div>

        <section className="mt-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold">Learning architecture</h2>
            <p className="mt-3 text-slate-400">
              DataRay Academy keeps Courses and Training Programs as the primary
              offering types, then layers learning maturity on top through three tracks.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {academyTracks.map((track) => {
              const courses = getCoursesByTrack(track.slug);
              const programs = getProgramsByTrack(track.slug);

              return (
                <div
                  key={track.slug}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-semibold">{track.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {track.description}
                  </p>

                  <div className="mt-6">
                    <p className="text-sm font-medium text-slate-300">Courses</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-400">
                      {courses.map((course) => (
                        <li key={course.slug}>• {course.title}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-medium text-slate-300">Institutional pathway</p>
                    <p className="mt-2 text-sm font-medium text-slate-200">
                      {track.pathwayTitle}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {track.pathwayDescription}
                    </p>

                    {programs.length > 0 && (
                      <ul className="mt-3 space-y-2 text-sm text-slate-400">
                        {programs.map((program) => (
                          <li key={program.slug}>• {program.title}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {featuredCourse && (
          <section className="mt-14 rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300/80">
              Featured live course
            </p>
            <h2 className="mt-3 text-3xl font-semibold">{featuredCourse.title}</h2>
            <p className="mt-4 max-w-3xl text-slate-400">{featuredCourse.description}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-slate-400">Track</p>
                <p className="mt-1 font-medium">AI & Advanced Data Science</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-slate-400">Duration</p>
                <p className="mt-1 font-medium">{featuredCourse.duration}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-slate-400">Level</p>
                <p className="mt-1 font-medium">{featuredCourse.level}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm text-slate-400">Format</p>
                <p className="mt-1 font-medium">{featuredCourse.format}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/academy/courses/ml"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:brightness-110"
              >
                Open ML Course
              </Link>
              <Link
                href="/academy/courses"
                className="rounded-xl border border-white/10 px-5 py-3 font-medium text-white transition hover:bg-white/5"
              >
                View full catalog
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
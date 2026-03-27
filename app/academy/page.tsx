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
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="eyebrow">DataRay Academy</p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Structured learning in data, analytics, and AI
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              DataRay Academy supports both individual learners and institutions
              through public courses and structured training programs across
              three capability layers: Data Foundations, Applied Analytics &
              Visualization, and AI &amp; Advanced Data Science.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Link
              href="/academy/courses"
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_50px_rgba(37,99,235,0.10)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                For individuals
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                Courses
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Public course pages with overviews, objectives, modules,
                duration, level, and learning progression.
              </p>

              <p className="mt-5 text-sm font-medium text-blue-600">
                Explore courses →
              </p>
            </Link>

            <Link
              href="/academy/programs"
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_50px_rgba(37,99,235,0.10)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                For organizations
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                Training Programs
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Institutional pathways for NGOs, businesses, healthcare teams,
                and public-sector organizations.
              </p>

              <p className="mt-5 text-sm font-medium text-blue-600">
                View training programs →
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="eyebrow">Learning Architecture</p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Structured capability development across three tracks
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              DataRay Academy keeps Courses and Training Programs as the primary
              offering types, then layers learning maturity on top through three
              tracks.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {academyTracks.map((track) => {
              const courses = getCoursesByTrack(track.slug);
              const programs = getProgramsByTrack(track.slug);

              return (
                <div
                  key={track.slug}
                  className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {track.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {track.description}
                  </p>

                  <div className="mt-6">
                    <p className="text-sm font-semibold text-slate-800">
                      Courses
                    </p>

                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      {courses.map((course) => (
                        <li key={course.slug}>• {course.title}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-semibold text-slate-800">
                      Institutional pathway
                    </p>

                    <p className="mt-2 text-sm font-medium text-slate-900">
                      {track.pathwayTitle}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {track.pathwayDescription}
                    </p>

                    {programs.length > 0 && (
                      <ul className="mt-3 space-y-2 text-sm text-slate-600">
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
        </div>
      </section>

      {featuredCourse && (
        <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <p className="eyebrow">Featured Live Course</p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {featuredCourse.title}
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                {featuredCourse.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Track</p>
                  <p className="mt-1 font-medium text-slate-950">
                    AI &amp; Advanced Data Science
                  </p>
                </div>

                <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Duration</p>
                  <p className="mt-1 font-medium text-slate-950">
                    {featuredCourse.duration}
                  </p>
                </div>

                <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Level</p>
                  <p className="mt-1 font-medium text-slate-950">
                    {featuredCourse.level}
                  </p>
                </div>

                <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Format</p>
                  <p className="mt-1 font-medium text-slate-950">
                    {featuredCourse.format}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/academy/courses/ml"
                  className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.20)] transition duration-300 hover:scale-[1.02]"
                >
                  Open ML Course
                </Link>

                <Link
                  href="/academy/courses"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 transition duration-300 hover:bg-slate-50"
                >
                  View full catalog
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
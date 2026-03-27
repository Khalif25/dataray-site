import Link from "next/link";
import { academyTracks, getCoursesByTrack } from "@/lib/data";

export default function AcademyCoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="eyebrow">DataRay Academy</p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Courses
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Explore the full DataRay Academy course catalog, organized across
            Data Foundations, Applied Analytics & Visualization, and AI &
            Advanced Data Science.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {academyTracks.map((track) => {
            const courses = getCoursesByTrack(track.slug);

            return (
              <section key={track.slug}>
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {track.title}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {track.description}
                  </p>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {courses.map((course) => (
                    <Link
                      key={course.slug}
                      href={`/academy/courses/${course.slug}`}
                      className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_50px_rgba(37,99,235,0.10)]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                          {course.title}
                        </h3>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            course.status === "live"
                              ? "border border-cyan-200 bg-cyan-50 text-cyan-700"
                              : "border border-amber-200 bg-amber-50 text-amber-700"
                          }`}
                        >
                          {course.status === "live"
                            ? "Available"
                            : "Coming soon"}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {course.description}
                      </p>

                      <div className="mt-6 grid gap-3">
                        <div>
                          <p className="text-sm text-slate-500">Track</p>
                          <p className="text-sm font-medium text-slate-900">
                            {track.title}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm text-slate-500">Duration</p>
                          <p className="text-sm font-medium text-slate-900">
                            {course.duration}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm text-slate-500">Level</p>
                          <p className="text-sm font-medium text-slate-900">
                            {course.level}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm text-slate-500">Format</p>
                          <p className="text-sm font-medium text-slate-900">
                            {course.format}
                          </p>
                        </div>
                      </div>

                      <p className="mt-6 text-sm font-medium text-blue-600">
                        {course.status === "live"
                          ? "View course →"
                          : "View course / Join waitlist →"}
                      </p>
                    </Link>
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
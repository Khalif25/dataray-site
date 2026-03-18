import Link from "next/link";
import { academyCourses } from "@/lib/data";

export default function AcademyCoursesPage() {
  return (
    <main className="min-h-screen bg-[#020817] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            DataRay Academy
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Courses</h1>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Explore self-paced and guided courses designed to build practical capability in
            machine learning, SQL, and applied analytics.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {academyCourses.map((course) => (
            <Link
              key={course.slug}
              href={`/academy/courses/${course.slug}`}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    course.status === "live"
                      ? "border border-cyan-300/20 bg-cyan-400/10 text-cyan-100"
                      : "border border-amber-300/20 bg-amber-400/10 text-amber-100"
                  }`}
                >
                  {course.status === "live" ? "Available" : "Coming soon"}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-400">{course.description}</p>

              <div className="mt-6 grid gap-3">
                <div>
                  <p className="text-sm text-slate-500">Duration</p>
                  <p className="text-sm font-medium text-slate-200">{course.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Level</p>
                  <p className="text-sm font-medium text-slate-200">{course.level}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Format</p>
                  <p className="text-sm font-medium text-slate-200">{course.format}</p>
                </div>
              </div>

              <p className="mt-6 text-sm font-medium text-cyan-300">View course →</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
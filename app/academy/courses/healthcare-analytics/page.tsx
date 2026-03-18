import Link from "next/link";
import { academyCourses } from "@/lib/data";

const course = academyCourses.find((item) => item.slug === "healthcare-analytics");

export default function HealthcareAnalyticsCoursePage() {
  if (!course) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#020817] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            DataRay Academy / Courses
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">{course.title}</h1>
          <p className="mt-5 text-base leading-7 text-slate-300">
            This course is under development and will be released soon. It is being designed for
            learners and institutions interested in applied healthcare data analysis and dashboard
            decision support.
          </p>
        </div>

        <div className="mt-8 inline-flex rounded-full border border-amber-300/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-100">
          Release soon
        </div>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-2xl font-semibold">Planned objectives</h2>
            <ul className="mt-5 space-y-3 text-slate-400">
              {course.objectives.map((objective) => (
                <li key={objective}>• {objective}</li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">Planned modules</h2>
            <div className="mt-5 space-y-4">
              {course.modules.map((module, index) => (
                <div
                  key={module}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm text-cyan-300/80">Module {index + 1}</p>
                  <h3 className="mt-1 text-lg font-medium">{module}</h3>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Course snapshot</h2>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="text-slate-500">Estimated duration</p>
                <p className="mt-1 font-medium text-slate-200">{course.duration}</p>
              </div>

              <div>
                <p className="text-slate-500">Level</p>
                <p className="mt-1 font-medium text-slate-200">{course.level}</p>
              </div>

              <div>
                <p className="text-slate-500">Format</p>
                <p className="mt-1 font-medium text-slate-200">{course.format}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/contact"
                className="rounded-xl border border-white/10 px-5 py-3 text-center font-medium text-white transition hover:bg-white/5"
              >
                Request release updates
              </Link>

              <Link
                href="/academy/programs"
                className="rounded-xl border border-white/10 px-5 py-3 text-center font-medium text-white transition hover:bg-white/5"
              >
                View institutional programs
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
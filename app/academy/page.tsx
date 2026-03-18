import Link from "next/link";
import { academyCourses, academyPrograms } from "@/lib/data";

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
            AI, analytics, and decision-intelligence learning for individuals and institutions
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            DataRay Academy delivers structured learning through self-paced courses and
            institutional training programs designed for real-world data and AI capability building.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/academy/courses"
            className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
          >
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300/80">
              For Individuals
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Courses</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Self-paced and guided learning in machine learning, SQL, and applied analytics.
            </p>
            <p className="mt-5 text-sm font-medium text-cyan-300">Explore courses →</p>
          </Link>

          <Link
            href="/academy/programs"
            className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
          >
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300/80">
              For Organizations
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Training Programs</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Structured programs for NGOs, businesses, healthcare teams, and institutions.
            </p>
            <p className="mt-5 text-sm font-medium text-cyan-300">View programs →</p>
          </Link>
        </div>

        {featuredCourse && (
          <section className="mt-14 rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300/80">
              Featured Course
            </p>
            <h2 className="mt-3 text-3xl font-semibold">{featuredCourse.title}</h2>
            <p className="mt-4 max-w-3xl text-slate-400">{featuredCourse.description}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
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
                View All Courses
              </Link>
            </div>
          </section>
        )}

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Upcoming learning paths</h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            More DataRay Academy offerings are being prepared for release. These pages are visible
            now so learners and institutions can understand the roadmap and expected scope.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {academyCourses
              .filter((course) => course.status === "coming-soon")
              .map((course) => (
                <Link
                  key={course.slug}
                  href={`/academy/courses/${course.slug}`}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                    <span className="rounded-full border border-amber-300/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-100">
                      Coming soon
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{course.description}</p>
                  <p className="mt-5 text-sm font-medium text-cyan-300">View details →</p>
                </Link>
              ))}
          </div>
        </section>

        <section className="mt-14 rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Institutional training</h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            DataRay Academy also supports institutions through team-based and custom training
            programs in machine learning, healthcare analytics, dashboards, and decision
            intelligence.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {academyPrograms.map((program) => (
              <div
                key={program.slug}
                className="rounded-xl border border-white/10 bg-black/20 p-5"
              >
                <h3 className="text-lg font-semibold">{program.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{program.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/academy/programs"
              className="rounded-xl border border-white/10 px-5 py-3 font-medium text-white transition hover:bg-white/5"
            >
              View training programs
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
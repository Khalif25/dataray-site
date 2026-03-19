import Link from "next/link";
import { academyCourses, academyTracks } from "@/lib/data";

const course = academyCourses.find((item) => item.slug === "ml");
const track = academyTracks.find((item) => item.slug === course?.track);

export default function MachineLearningCoursePage() {
  if (!course) return null;

  return (
    <main className="min-h-screen bg-[#020817] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            DataRay Academy / Courses
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">{course.title}</h1>
          <p className="mt-5 text-base leading-7 text-slate-300">{course.description}</p>
        </div>

        <div className="mt-8 inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
          {track?.title ?? "Advanced Track"}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-500">Track</p>
            <p className="mt-1 font-medium">{track?.title ?? "Advanced Track"}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-500">Duration</p>
            <p className="mt-1 font-medium">{course.duration}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-500">Level</p>
            <p className="mt-1 font-medium">{course.level}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-500">Format</p>
            <p className="mt-1 font-medium">{course.format}</p>
          </div>
        </div>

        <section className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-2xl font-semibold">Course overview</h2>
            <p className="mt-4 text-slate-400">
              This course belongs to DataRay Academy’s AI & Advanced Data Science and is designed
              for learners building capability in predictive analytics, model development,
              and practical machine learning workflows.
            </p>

            <h2 className="mt-10 text-2xl font-semibold">Learning objectives</h2>
            <ul className="mt-5 space-y-3 text-slate-400">
              {course.objectives.map((objective) => (
                <li key={objective}>• {objective}</li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">Modules</h2>
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
            <h2 className="text-xl font-semibold">Course information</h2>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="text-slate-500">Audience</p>
                <p className="mt-1 font-medium text-slate-200">
                  Students, junior analysts, aspiring ML practitioners, and teams
                  building practical analytics capability
                </p>
              </div>

              <div>
                <p className="text-slate-500">Prerequisites</p>
                <p className="mt-1 font-medium text-slate-200">
                  Basic Python familiarity and general analytical interest are helpful
                </p>
              </div>

              <div>
                <p className="text-slate-500">Availability</p>
                <p className="mt-1 font-medium text-slate-200">Public overview available now</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link
  href="/academy/register"
  className="rounded-xl bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950 transition hover:brightness-110"
>
  Register to Enroll
</Link>

<Link
  href="/academy/programs"
  className="rounded-xl border border-white/10 px-5 py-3 text-center font-medium text-white transition hover:bg-white/5"
>
  Request Team Training
</Link>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
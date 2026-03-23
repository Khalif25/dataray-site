import Link from "next/link";
import { notFound } from "next/navigation";
import EnrollButton from "@/components/EnrollButton";
import { academyCourses, academyTracks } from "@/lib/data";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = academyCourses.find((c) => c.slug === slug);

  if (!course) {
    return notFound();
  }

  const track = academyTracks.find((t) => t.slug === course.track);
  const isLive = course.status === "live";

  return (
    <main className="min-h-screen bg-[#020817] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/academy/courses"
          className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
        >
          ← Back to courses
        </Link>

        <div className="mt-6 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            DataRay Academy
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {course.title}
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-300">
            {course.description}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${
              isLive
                ? "border border-cyan-300/20 bg-cyan-400/10 text-cyan-100"
                : "border border-amber-300/20 bg-amber-400/10 text-amber-100"
            }`}
          >
            {isLive ? "Available" : "Coming soon"}
          </span>

          {track && (
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
              {track.title}
            </span>
          )}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-500">Track</p>
            <p className="mt-1 font-medium">{track?.title ?? "Academy Course"}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-500">Duration</p>
            <p className="mt-1 font-medium">{course.duration}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-500">Level</p>
            <p className="mt-1 font-medium">{course.level}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-slate-500">Format</p>
            <p className="mt-1 font-medium">{course.format}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <section>
              <h2 className="text-2xl font-semibold">Learning objectives</h2>
              <ul className="mt-5 space-y-3 text-slate-300">
                {course.objectives.map((obj) => (
                  <li key={obj}>• {obj}</li>
                ))}
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold">Course modules</h2>
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
            </section>
          </div>

          <aside className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Course information</h2>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="text-slate-500">Availability</p>
                <p className="mt-1 font-medium text-slate-200">
                  {isLive
                    ? "Open for learner enrollment"
                    : "Planned for release within the next 6 months"}
                </p>
              </div>

              <div>
                <p className="text-slate-500">Who it is for</p>
                <p className="mt-1 font-medium text-slate-200">
                  Learners and institutions building practical capability in{" "}
                  {track?.shortTitle?.toLowerCase() ?? "data"}.
                </p>
              </div>

              <div>
                <p className="text-slate-500">Next step</p>
                <p className="mt-1 font-medium text-slate-200">
                  {isLive
                    ? "Log in and submit your enrollment request."
                    : "Log in and join the waitlist for early access."}
                </p>
              </div>
            </div>

            {!isLive && (
              <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-400/10 p-5">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-100/80">
                  Join Waitlist
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  Join the waitlist for{" "}
                  <span className="font-semibold">{course.title}</span> to
                  register your interest and stay ready for release.
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3">
              <EnrollButton courseSlug={course.slug} isLive={isLive} />

              <Link
                href="/academy/dashboard"
                className="rounded-xl border border-white/10 px-5 py-3 text-center font-medium text-white transition hover:bg-white/5"
              >
                Open learner dashboard
              </Link>

              <Link
                href="/academy/programs"
                className="rounded-xl border border-white/10 px-5 py-3 text-center font-medium text-white transition hover:bg-white/5"
              >
                Explore training programs
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/10 px-5 py-3 text-center font-medium text-white transition hover:bg-white/5"
              >
                Contact / Support
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
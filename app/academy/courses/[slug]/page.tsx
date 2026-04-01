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

  if (!course) return notFound();

  const track = academyTracks.find((t) => t.slug === course.track);
  const isLive = course.status === "live";

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Back */}
        <Link
          href="/academy/courses"
          className="text-sm font-medium text-blue-600 transition hover:text-blue-500"
        >
          ← Back to courses
        </Link>

        {/* Header */}
        <div className="mt-6 max-w-3xl">
          <p className="eyebrow">DataRay Academy</p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {course.title}
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-600">
            {course.description}
          </p>
        </div>

        {/* Status */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span
            className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${
              isLive
                ? "border border-cyan-200 bg-cyan-50 text-cyan-700"
                : "border border-amber-200 bg-amber-50 text-amber-700"
            }`}
          >
            {isLive ? "Available" : "Coming soon"}
          </span>

          {track && (
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
              {track.title}
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Track", value: track?.title ?? "Academy Course" },
            { label: "Duration", value: course.duration },
            { label: "Level", value: course.level },
            { label: "Format", value: course.format },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-1 font-medium text-slate-950">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            {/* Objectives */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-950">
                Learning objectives
              </h2>

              <ul className="mt-5 space-y-3 text-slate-600">
                {course.objectives.map((obj) => (
                  <li key={obj}>• {obj}</li>
                ))}
              </ul>
            </section>

            {/* Modules */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-slate-950">
                Course modules
              </h2>

              <div className="mt-5 space-y-4">
                {course.modules.map((module, index) => (
                  <div
                    key={module}
                    className="rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <p className="text-sm text-blue-600">
                      Module {index + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-medium text-slate-950">
                      {module}
                    </h3>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="rounded-[24px] border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-950">
              Course information
            </h2>

            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="text-slate-500">Availability</p>
                <p className="mt-1 font-medium text-slate-900">
                  {isLive
                    ? "Open for learner enrollment"
                    : "Planned for release in the coming months"}
                </p>
              </div>

              <div>
                <p className="text-slate-500">Who it is for</p>
                <p className="mt-1 font-medium text-slate-900">
                  Learners and institutions building practical capability in{" "}
                  {track?.shortTitle?.toLowerCase() ?? "data"}.
                </p>
              </div>

              <div>
                <p className="text-slate-500">Next step</p>
                <p className="mt-1 font-medium text-slate-900">
                  {isLive
                    ? "Log in and submit your enrollment request."
                    : "Log in and join the waitlist for early access."}
                </p>
              </div>
            </div>

            {!isLive && (
              <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-600">
                  Join Waitlist
                </p>

                <p className="mt-3 text-sm text-slate-700">
                  Join the waitlist for{" "}
                  <span className="font-semibold">{course.title}</span> to stay
                  ready for release.
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3">
              <EnrollButton courseSlug={course.slug} isLive={isLive} />

              <Link
                href="/academy/dashboard"
                className="rounded-full border border-slate-300 px-5 py-3 text-center font-medium text-slate-800 hover:bg-slate-50"
              >
                Open learner dashboard
              </Link>

              <Link
                href="/academy/programs"
                className="rounded-full border border-slate-300 px-5 py-3 text-center font-medium text-slate-800 hover:bg-slate-50"
              >
                Explore training programs
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-slate-300 px-5 py-3 text-center font-medium text-slate-800 hover:bg-slate-50"
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
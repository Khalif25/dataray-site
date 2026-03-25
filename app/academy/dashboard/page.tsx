import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/LogoutButton";
import { academyCourses } from "@/lib/data";

const WHATSAPP_NUMBER = "252907736110";

function buildWhatsAppLink(courseTitle: string, courseSlug: string) {
  const message = `Hello DataRay, I want to complete payment / send proof for ${courseTitle} (${courseSlug}).`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getStatusBadgeClasses(status: string) {
  if (status === "approved") {
    return "border border-emerald-400/25 bg-emerald-400/12 text-emerald-200";
  }

  if (status === "rejected") {
    return "border border-rose-400/25 bg-rose-400/12 text-rose-200";
  }

  if (status === "waitlist") {
    return "border border-violet-400/25 bg-violet-400/12 text-violet-200";
  }

  return "border border-amber-400/25 bg-amber-400/12 text-amber-200";
}

function getStatusLabel(status: string) {
  if (status === "approved") return "Approved";
  if (status === "rejected") return "Rejected";
  if (status === "waitlist") return "Waitlist";
  return "Pending";
}

function formatValue(value: string | null | undefined) {
  if (!value || value.trim() === "") return "Not provided";
  return value;
}

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/academy/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const { data: enrollments, error } = await supabase
    .from("enrollments")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const approvedEnrollments =
    enrollments?.filter((item) => item.status === "approved") ?? [];
  const pendingEnrollments =
    enrollments?.filter((item) => item.status === "pending") ?? [];
  const waitlistEnrollments =
    enrollments?.filter((item) => item.status === "waitlist") ?? [];

  const totalRequests = enrollments?.length ?? 0;
  const activeCourses = approvedEnrollments.length;
  const pendingActions = pendingEnrollments.length;
  const waitlistCount = waitlistEnrollments.length;

  return (
    <main className="min-h-screen bg-[#020817] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-[#081224] via-[#0b1730] to-[#0a1328] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-8">
          <div className="pointer-events-none absolute -right-10 top-0 h-44 w-44 rounded-full bg-cyan-400/12 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-20 h-36 w-36 rounded-full bg-violet-500/12 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08),transparent_24%)]" />

          <div className="relative flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">
                DataRay Academy
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Learner Dashboard
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Welcome
                {profile?.full_name ? `, ${profile.full_name}` : ""}. Track your
                requests, complete payment where needed, and access approved
                courses from one place.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/academy/courses"
                className="inline-flex items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/15"
              >
                Browse courses
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Support
              </Link>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-1 py-1">
                <LogoutButton />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[28px] border border-cyan-400/15 bg-gradient-to-b from-cyan-400/10 to-cyan-400/[0.03] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
            <p className="text-sm text-slate-300">Total Requests</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              {totalRequests}
            </h2>
            <p className="mt-2 text-sm text-cyan-200">
              All enrollment submissions
            </p>
          </div>

          <div className="rounded-[28px] border border-emerald-400/15 bg-gradient-to-b from-emerald-400/10 to-emerald-400/[0.03] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
            <p className="text-sm text-slate-300">Active Courses</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              {activeCourses}
            </h2>
            <p className="mt-2 text-sm text-emerald-200">
              Approved and ready to learn
            </p>
          </div>

          <div className="rounded-[28px] border border-amber-400/15 bg-gradient-to-b from-amber-400/10 to-amber-400/[0.03] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
            <p className="text-sm text-slate-300">Pending Actions</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              {pendingActions}
            </h2>
            <p className="mt-2 text-sm text-amber-200">
              Requests awaiting payment or review
            </p>
          </div>

          <div className="rounded-[28px] border border-violet-400/15 bg-gradient-to-b from-violet-400/10 to-violet-400/[0.03] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
            <p className="text-sm text-slate-300">Waitlist</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              {waitlistCount}
            </h2>
            <p className="mt-2 text-sm text-violet-200">
              Courses with recorded interest
            </p>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <section className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.025] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.32)]">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-white">Profile</h2>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  Learner
                </span>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Full name
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-100">
                    {formatValue(profile?.full_name || user.user_metadata?.full_name)}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Email
                  </p>
                  <p className="mt-2 break-words text-base font-medium text-slate-100">
                    {formatValue(user.email)}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Organization
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-100">
                    {formatValue(
                      profile?.organization || user.user_metadata?.organization,
                    )}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Phone
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-100">
                    {formatValue(profile?.phone || user.user_metadata?.phone)}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Country
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-100">
                    {formatValue(profile?.country || user.user_metadata?.country)}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    City
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-100">
                    {formatValue(profile?.city || user.user_metadata?.city)}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Job title
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-100">
                    {formatValue(
                      profile?.job_title || user.user_metadata?.job_title,
                    )}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Work status
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-100">
                    {formatValue(
                      profile?.work_status || user.user_metadata?.work_status,
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.025] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.32)]">
              <h2 className="text-2xl font-semibold text-white">Quick actions</h2>

              <div className="mt-5 grid gap-3">
                <Link
                  href="/academy/courses"
                  className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/15"
                >
                  Browse more courses
                </Link>

                <Link
                  href="/academy/programs"
                  className="rounded-2xl border border-violet-400/20 bg-violet-400/10 px-4 py-3 text-sm font-medium text-violet-100 transition hover:bg-violet-400/15"
                >
                  Explore training programs
                </Link>

                <Link
                  href="/contact"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Contact / Support
                </Link>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.025] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.32)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    Your Courses
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    View your waitlist requests, payment steps, and approved
                    course access.
                  </p>
                </div>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {totalRequests} request(s)
                </span>
              </div>

              {error && (
                <div className="mt-6 rounded-2xl border border-rose-400/20 bg-rose-400/10 p-4 text-sm text-rose-200">
                  Failed to load requests.
                </div>
              )}

              <div className="mt-8 space-y-5">
                {!enrollments || enrollments.length === 0 ? (
                  <div className="rounded-[24px] border border-white/10 bg-black/20 p-6">
                    <p className="text-lg font-medium text-slate-100">
                      No requests yet
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Browse the Academy catalog and submit your first enrollment
                      or waitlist request.
                    </p>

                    <Link
                      href="/academy/courses"
                      className="mt-5 inline-flex rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
                    >
                      Browse courses
                    </Link>
                  </div>
                ) : (
                  enrollments.map((enroll) => {
                    const matchedCourse = academyCourses.find(
                      (course) => course.slug === enroll.course_slug,
                    );

                    const courseTitle = matchedCourse?.title || enroll.course_slug;
                    const whatsappLink = buildWhatsAppLink(
                      courseTitle,
                      enroll.course_slug,
                    );

                    return (
                      <div
                        key={enroll.id}
                        className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.28)]"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-2xl font-medium text-white">
                              {courseTitle}
                            </p>
                            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                              Course ID: {enroll.course_slug}
                            </p>
                            <p className="mt-2 text-sm text-slate-400">
                              Requested on{" "}
                              {new Date(enroll.created_at).toLocaleDateString()}
                            </p>
                          </div>

                          <span
                            className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${getStatusBadgeClasses(
                              enroll.status,
                            )}`}
                          >
                            {getStatusLabel(enroll.status)}
                          </span>
                        </div>

                        {enroll.status === "approved" ? (
                          <div className="mt-5">
                            <p className="text-sm text-slate-300">
                              Your access is active. You can now start learning.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3">
                              <Link
                                href={`/academy/learn/${enroll.course_slug}`}
                                className="inline-flex rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
                              >
                                Start learning
                              </Link>

                              <Link
                                href={`/academy/courses/${enroll.course_slug}`}
                                className="inline-flex rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                              >
                                View course page
                              </Link>
                            </div>
                          </div>
                        ) : enroll.status === "rejected" ? (
                          <div className="mt-5">
                            <p className="text-sm text-slate-300">
                              Your request was not approved. Contact support if
                              you need clarification.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3">
                              <Link
                                href="/contact"
                                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                              >
                                Contact / Support
                              </Link>
                            </div>
                          </div>
                        ) : enroll.status === "waitlist" ? (
                          <div className="mt-5">
                            <p className="text-sm text-slate-300">
                              You are on the waitlist for this course.
                            </p>
                            <p className="mt-2 text-sm text-slate-400">
                              We’ve recorded your interest. When your place opens,
                              your status will change and you’ll be prompted to
                              complete payment.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3">
                              <Link
                                href={`/academy/courses/${enroll.course_slug}`}
                                className="rounded-2xl border border-violet-400/20 bg-violet-400/10 px-5 py-3 text-sm font-medium text-violet-100 transition hover:bg-violet-400/15"
                              >
                                View course page
                              </Link>

                              <Link
                                href="/academy/courses"
                                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                              >
                                Browse more courses
                              </Link>

                              <Link
                                href="/contact"
                                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                              >
                                Contact / Support
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div className="mt-5">
                            <p className="text-sm text-slate-300">
                              Your place is ready. Complete payment and send
                              proof to proceed.
                            </p>
                            <p className="mt-2 text-sm text-slate-400">
                              After payment verification, your course access will
                              be approved.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3">
                              <Link
                                href={`/academy/payment?course=${enroll.course_slug}`}
                                className="rounded-2xl bg-gradient-to-r from-amber-300 to-orange-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:brightness-110"
                              >
                                Complete payment
                              </Link>

                              <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-sm font-medium text-emerald-100 transition hover:bg-emerald-400/15"
                              >
                                Send proof via WhatsApp
                              </a>

                              <Link
                                href={`/academy/courses/${enroll.course_slug}`}
                                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                              >
                                View course page
                              </Link>

                              <Link
                                href="/contact"
                                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                              >
                                Contact / Support
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.025] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.32)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    Approved access
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Approved courses appear here and open your protected learning
                    area.
                  </p>
                </div>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  {approvedEnrollments.length} active
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {approvedEnrollments.length === 0 ? (
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-400">
                    No approved courses yet.
                  </div>
                ) : (
                  approvedEnrollments.map((enroll) => {
                    const matchedCourse = academyCourses.find(
                      (course) => course.slug === enroll.course_slug,
                    );

                    return (
                      <Link
                        key={enroll.id}
                        href={`/academy/learn/${enroll.course_slug}`}
                        className="flex items-center justify-between rounded-2xl border border-emerald-400/15 bg-emerald-400/8 px-4 py-4 transition hover:bg-emerald-400/12"
                      >
                        <div>
                          <p className="font-medium text-white">
                            {matchedCourse?.title || enroll.course_slug}
                          </p>
                          <p className="mt-1 text-sm text-emerald-100/80">
                            Open learning area
                          </p>
                        </div>

                        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-100">
                          Start
                        </span>
                      </Link>
                    );
                  })
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
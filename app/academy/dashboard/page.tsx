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

  return (
    <main className="min-h-screen bg-[#020817] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
                DataRay Academy
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Learner Dashboard
              </h1>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Welcome{profile?.full_name ? `, ${profile.full_name}` : ""}. View your
                requests, complete payment where needed, and access approved courses.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/academy/courses"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Browse courses
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Support
              </Link>

              <LogoutButton />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="space-y-6">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Profile</h2>

              <div className="mt-5 space-y-4 text-sm">
                <div>
                  <p className="text-slate-500">Full name</p>
                  <p className="mt-1 font-medium text-slate-200">
                    {profile?.full_name || user.user_metadata?.full_name || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Email</p>
                  <p className="mt-1 font-medium text-slate-200">
                    {profile?.email || user.email || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Organization</p>
                  <p className="mt-1 font-medium text-slate-200">
                    {profile?.organization ||
                      user.user_metadata?.organization ||
                      "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Phone</p>
                  <p className="mt-1 font-medium text-slate-200">
                    {profile?.phone || user.user_metadata?.phone || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Country</p>
                  <p className="mt-1 font-medium text-slate-200">
                    {profile?.country || user.user_metadata?.country || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">City</p>
                  <p className="mt-1 font-medium text-slate-200">
                    {profile?.city || user.user_metadata?.city || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Job title</p>
                  <p className="mt-1 font-medium text-slate-200">
                    {profile?.job_title || user.user_metadata?.job_title || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Work status</p>
                  <p className="mt-1 font-medium text-slate-200">
                    {profile?.work_status || user.user_metadata?.work_status || "Not provided"}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Quick actions</h2>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/academy/courses"
                  className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Browse more courses
                </Link>

                <Link
                  href="/academy/programs"
                  className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Explore training programs
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  Contact / Support
                </Link>
              </div>
            </div>
          </section>

          <section>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold">Your Courses</h2>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {enrollments?.length ?? 0} request(s)
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                View your waitlist requests, payment steps, and approved course access.
              </p>

              {error && (
                <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-200">
                  Failed to load requests.
                </div>
              )}

              <div className="mt-8 space-y-4">
                {!enrollments || enrollments.length === 0 ? (
                  <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                    <p className="font-medium text-slate-200">No requests yet</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Browse the Academy catalog and submit your first enrollment or waitlist request.
                    </p>

                    <Link
                      href="/academy/courses"
                      className="mt-4 inline-flex rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-black transition hover:brightness-110"
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
                        className="rounded-xl border border-white/10 bg-black/20 p-5"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-lg font-medium">{courseTitle}</p>
                            <p className="mt-1 text-xs text-slate-500">
                              Course ID: {enroll.course_slug}
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                              Requested on{" "}
                              {new Date(enroll.created_at).toLocaleDateString()}
                            </p>
                          </div>

                          <span
                            className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium ${
                              enroll.status === "approved"
                                ? "border border-cyan-300/20 bg-cyan-400/10 text-cyan-100"
                                : enroll.status === "rejected"
                                  ? "border border-red-300/20 bg-red-400/10 text-red-100"
                                  : enroll.status === "waitlist"
                                    ? "border border-blue-300/20 bg-blue-400/10 text-blue-100"
                                    : "border border-amber-300/20 bg-amber-400/10 text-amber-100"
                            }`}
                          >
                            {enroll.status === "approved"
                              ? "Approved"
                              : enroll.status === "rejected"
                                ? "Rejected"
                                : enroll.status === "waitlist"
                                  ? "Waitlist"
                                  : "Pending"}
                          </span>
                        </div>

                        {enroll.status === "approved" ? (
                          <div className="mt-4">
                            <p className="text-sm text-slate-300">
                              Your access is active. You can now start learning.
                            </p>
                            <Link
                              href={`/academy/learn/${enroll.course_slug}`}
                              className="mt-4 inline-flex rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-black transition hover:brightness-110"
                            >
                              Start learning
                            </Link>
                          </div>
                        ) : enroll.status === "rejected" ? (
                          <div className="mt-4">
                            <p className="text-sm text-slate-300">
                              Your request was not approved. Contact support if you need clarification.
                            </p>
                            <Link
                              href="/contact"
                              className="mt-4 inline-flex rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                            >
                              Contact support
                            </Link>
                          </div>
                        ) : enroll.status === "waitlist" ? (
                          <div className="mt-4">
                            <p className="text-sm text-slate-300">
                              You are on the waitlist for this course.
                            </p>
                            <p className="mt-2 text-sm text-slate-400">
                              We’ve recorded your interest. When your place opens, your status will change and you’ll be prompted to complete payment.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3">
                              <Link
                                href={`/academy/courses/${enroll.course_slug}`}
                                className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                              >
                                View course page
                              </Link>

                              <Link
                                href="/academy/courses"
                                className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                              >
                                Browse more courses
                              </Link>

                              <Link
                                href="/contact"
                                className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                              >
                                Contact / Support
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div className="mt-4">
                            <p className="text-sm text-slate-300">
                              Your place is ready. Complete payment and send proof to proceed.
                            </p>
                            <p className="mt-2 text-sm text-slate-400">
                              After payment verification, your course access will be approved.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3">
                              <Link
                                href={`/academy/payment?course=${enroll.course_slug}`}
                                className="rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-black transition hover:brightness-110"
                              >
                                Complete payment
                              </Link>

                              <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                              >
                                Send proof via WhatsApp
                              </a>

                              <Link
                                href={`/academy/courses/${enroll.course_slug}`}
                                className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                              >
                                View course page
                              </Link>

                              <Link
                                href="/contact"
                                className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
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

            <div className="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Approved access</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Approved courses appear here and open your protected learning area.
              </p>

              <div className="mt-6 space-y-3">
                {approvedEnrollments.length === 0 ? (
                  <p className="text-sm text-slate-400">No approved courses yet.</p>
                ) : (
                  approvedEnrollments.map((enroll) => {
                    const matchedCourse = academyCourses.find(
                      (course) => course.slug === enroll.course_slug,
                    );

                    return (
                      <Link
                        key={enroll.id}
                        href={`/academy/learn/${enroll.course_slug}`}
                        className="block rounded-xl border border-white/10 bg-black/20 p-4 transition hover:bg-white/5"
                      >
                        <p className="font-medium">
                          {matchedCourse?.title || enroll.course_slug}
                        </p>
                        <p className="mt-1 text-sm text-cyan-300">
                          Open learning area →
                        </p>
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
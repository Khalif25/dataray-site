import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function AcademyDashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/academy/login");
  }

  const fullName =
    (user.user_metadata?.full_name as string | undefined) || user.email || "Learner";

  return (
    <main className="min-h-screen bg-[#020817] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            DataRay Academy
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            Learner Dashboard
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Welcome, {fullName}. This is your Academy dashboard. Approved course
            access and progress tracking will appear here.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Machine Learning</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Public course information is available now. Protected learning access
              can be enabled after enrollment approval.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/academy/courses/ml"
                className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                View public page
              </Link>

              <Link
  href="/academy/course/ml/learn"
  className="rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
>
  Start learning
</Link>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Account</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div>
                <p className="text-slate-500">Email</p>
                <p className="font-medium text-slate-200">{user.email}</p>
              </div>
              <div>
                <p className="text-slate-500">User ID</p>
                <p className="break-all font-medium text-slate-200">{user.id}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Next step</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              The next MVP layer is enrollment approval, protected ML learning pages,
              and lesson progress tracking.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
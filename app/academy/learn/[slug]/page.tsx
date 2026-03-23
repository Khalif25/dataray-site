import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function LearnPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/academy/login");
  }

  const { data: enrollment, error: enrollmentError } = await supabase
    .from("enrollments")
    .select("*")
    .eq("user_id", user.id)
    .eq("course_slug", slug)
    .eq("status", "approved")
    .maybeSingle();

  if (enrollmentError) {
    return (
      <main className="min-h-screen bg-[#020817] p-8 text-white">
        <p>Enrollment error: {enrollmentError.message}</p>
      </main>
    );
  }

  if (!enrollment) {
    redirect("/academy/dashboard");
  }

  const { data: lessons, error: lessonsError } = await supabase
    .from("lessons")
    .select("*")
    .eq("course_slug", slug)
    .eq("is_published", true)
    .order("lesson_order", { ascending: true });

  return (
    <main className="min-h-screen bg-[#020817] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/academy/dashboard"
          className="text-sm font-medium text-cyan-300"
        >
          ← Back to dashboard
        </Link>

        <h1 className="mt-6 text-4xl font-semibold">Learning Area</h1>
        <p className="mt-3 text-slate-400">Course slug: {slug}</p>

        {lessonsError && (
          <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-red-200">
            Lesson query error: {lessonsError.message}
          </div>
        )}

        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-sm text-slate-400">
            Lessons found: {lessons?.length ?? 0}
          </p>
        </div>

        {!lessons || lessons.length === 0 ? (
          <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
            <p className="font-medium text-slate-200">No published lessons yet.</p>
            <p className="mt-2 text-sm text-slate-400">
              The page is working, but no lessons matched this course slug.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {lessons.map((lesson) => (
              <article
                key={lesson.id}
                className="rounded-2xl border border-white/10 bg-black/20 p-6"
              >
                <p className="text-sm text-cyan-300/80">
                  {lesson.module_title} • Lesson {lesson.lesson_order}
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  {lesson.lesson_title}
                </h2>
                <p className="mt-4 whitespace-pre-line leading-7 text-slate-300">
                  {lesson.content_body || "Lesson content coming soon."}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
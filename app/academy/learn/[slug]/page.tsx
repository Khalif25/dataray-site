import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LessonPlayer from "@/components/academy/lesson-player";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ lesson?: string }>;
};

type LessonRow = {
  id: string;
  course_slug: string;
  module_title: string | null;
  lesson_title: string;
  lesson_slug: string;
  lesson_order: number | null;
  content_type: string | null;
  content_body: string | null;
  video_url: string | null;
  is_published: boolean;
  created_at?: string | null;
};

type ProgressRow = {
  lesson_id: string;
  is_completed: boolean | null;
};

export default async function LearnCoursePage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const selectedLessonSlug = resolvedSearchParams?.lesson;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/academy/login?course=${slug}`);
  }

  const { data: enrollment } = await supabase
    .from("enrollments")
    .select("id, course_slug, status")
    .eq("user_id", user.id)
    .eq("course_slug", slug)
    .eq("status", "approved")
    .maybeSingle();

  if (!enrollment) {
    redirect("/academy/dashboard");
  }

  const { data: course } = await supabase
    .from("courses")
    .select("slug, title, description")
    .eq("slug", slug)
    .maybeSingle();

  const { data: lessons, error: lessonsError } = await supabase
    .from("lessons")
    .select(
      "id, course_slug, module_title, lesson_title, lesson_slug, lesson_order, content_type, content_body, video_url, is_published, created_at"
    )
    .eq("course_slug", slug)
    .eq("is_published", true)
    .order("module_title", { ascending: true })
    .order("lesson_order", { ascending: true })
    .order("created_at", { ascending: true });

  if (lessonsError || !lessons || lessons.length === 0) {
    notFound();
  }

  const { data: progressRows } = await supabase
    .from("lesson_progress")
    .select("lesson_id, is_completed")
    .eq("user_id", user.id)
    .eq("course_slug", slug);

  return (
    <LessonPlayer
      slug={slug}
      course={course}
      lessons={(lessons as LessonRow[]) ?? []}
      progressRows={(progressRows as ProgressRow[]) ?? []}
      initialLessonSlug={selectedLessonSlug}
    />
  );
}
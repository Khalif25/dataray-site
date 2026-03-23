import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const body = await request.json();
  const lessonId = body?.lessonId as string | undefined;
  const courseSlug = body?.courseSlug as string | undefined;
  const isCompleted = Boolean(body?.isCompleted);

  if (!lessonId || !courseSlug) {
    return NextResponse.json(
      { error: "lessonId and courseSlug are required." },
      { status: 400 },
    );
  }

  const { data: enrollment } = await supabase
    .from("enrollments")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_slug", courseSlug)
    .eq("status", "approved")
    .maybeSingle();

  if (!enrollment) {
    return NextResponse.json(
      { error: "You do not have approved access to this course." },
      { status: 403 },
    );
  }

  const { data: lesson } = await supabase
    .from("lessons")
    .select("id, course_slug")
    .eq("id", lessonId)
    .eq("course_slug", courseSlug)
    .eq("is_published", true)
    .maybeSingle();

  if (!lesson) {
    return NextResponse.json(
      { error: "Lesson not found." },
      { status: 404 },
    );
  }

  const payload = {
    user_id: user.id,
    lesson_id: lessonId,
    course_slug: courseSlug,
    is_completed: isCompleted,
    completed_at: isCompleted ? new Date().toISOString() : null,
    last_accessed_at: new Date().toISOString(),
  };

  const { error } = await supabase.from("lesson_progress").upsert(payload, {
    onConflict: "user_id,lesson_id",
  });

  if (error) {
    return NextResponse.json(
      { error: "Failed to save lesson progress." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
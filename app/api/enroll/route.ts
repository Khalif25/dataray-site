import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { course_slug, action } = await req.json();

  if (!course_slug) {
    return NextResponse.json({ error: "Missing course_slug" }, { status: 400 });
  }

  const status = action === "waitlist" ? "waitlist" : "pending";
  const request_type = action === "waitlist" ? "waitlist" : "course";

  const { data: existing, error: existingError } = await supabase
    .from("enrollments")
    .select("id, status, course_slug")
    .eq("user_id", user.id)
    .eq("course_slug", course_slug)
    .maybeSingle();

  if (existingError) {
    return NextResponse.json({ error: existingError.message }, { status: 500 });
  }

  if (existing) {
    return NextResponse.json({
      success: true,
      message:
        existing.status === "approved"
          ? "You already have access to this course."
          : existing.status === "waitlist"
            ? "You are already on the waitlist."
            : "You already submitted a request.",
    });
  }

  const { error: insertError } = await supabase.from("enrollments").insert({
    user_id: user.id,
    course_slug,
    status,
    request_type,
    source: "academy-web",
  });

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    message:
      status === "waitlist"
        ? "You have been added to the waitlist."
        : "Your enrollment request has been submitted.",
  });
}
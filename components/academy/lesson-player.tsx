"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import LessonCompleteButton from "@/components/academy/lesson-complete-button";

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

type CourseInfo = {
  slug: string;
  title: string | null;
  description: string | null;
} | null;

type LessonPlayerProps = {
  slug: string;
  course: CourseInfo;
  lessons: LessonRow[];
  progressRows: ProgressRow[];
  initialLessonSlug?: string;
};

function groupLessonsByModule(lessons: LessonRow[]) {
  const map = new Map<string, LessonRow[]>();

  for (const lesson of lessons) {
    const moduleTitle = lesson.module_title || "Course Lessons";

    if (!map.has(moduleTitle)) {
      map.set(moduleTitle, []);
    }

    map.get(moduleTitle)!.push(lesson);
  }

  return Array.from(map.entries()).map(([moduleTitle, moduleLessons]) => ({
    moduleTitle,
    lessons: moduleLessons,
  }));
}

function renderContentParagraphs(content: string | null) {
  if (!content) return [];

  return content
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function isVideoFile(url: string) {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
}

export default function LessonPlayer({
  slug,
  course,
  lessons,
  progressRows,
  initialLessonSlug,
}: LessonPlayerProps) {
  const [currentLessonSlug, setCurrentLessonSlug] = useState(
    initialLessonSlug && lessons.some((l) => l.lesson_slug === initialLessonSlug)
      ? initialLessonSlug
      : lessons[0]?.lesson_slug ?? "",
  );

  const completedLessonIds = useMemo(
    () =>
      new Set(
        (progressRows ?? [])
          .filter((row) => row.is_completed)
          .map((row) => row.lesson_id),
      ),
    [progressRows],
  );

  const groupedModules = useMemo(() => groupLessonsByModule(lessons), [lessons]);

  const currentLesson =
    lessons.find((lesson) => lesson.lesson_slug === currentLessonSlug) ||
    lessons[0];

  const currentIndex = lessons.findIndex(
    (lesson) => lesson.id === currentLesson?.id,
  );

  const previousLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex >= 0 && currentIndex < lessons.length - 1
      ? lessons[currentIndex + 1]
      : null;

  const completedCount = lessons.filter((lesson) =>
    completedLessonIds.has(lesson.id),
  ).length;

  const progressPercent =
    lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;

  const contentParagraphs = currentLesson
    ? renderContentParagraphs(currentLesson.content_body)
    : [];

  if (!currentLesson) {
    return (
      <main className="min-h-screen bg-[#020817] px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[24px] border border-white/10 bg-white/5 p-6">
          <p className="text-slate-300">No lesson is available for this course yet.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#020817] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 rounded-[24px] border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
                DataRay Academy
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {course?.title || slug}
              </h1>
              <p className="mt-3 text-base leading-7 text-slate-300">
                {course?.description ||
                  "Structured learning area with guided lessons, progress tracking, and navigation."}
              </p>
            </div>

            <div className="min-w-[260px] rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Course progress</span>
                <span className="font-semibold text-cyan-300">
                  {progressPercent}%
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-cyan-400 transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <p className="mt-3 text-sm text-slate-400">
                {completedCount} of {lessons.length} lessons completed
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-[24px] border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold">Course Lessons</h2>
              <Link
                href="/academy/dashboard"
                className="text-sm text-cyan-300 transition hover:text-cyan-200"
              >
                Back
              </Link>
            </div>

            <div className="mt-6 space-y-6">
              {groupedModules.map((module, moduleIndex) => (
                <div key={`${module.moduleTitle}-${moduleIndex}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Module {moduleIndex + 1}
                  </p>
                  <h3 className="mt-1 text-sm font-medium text-white">
                    {module.moduleTitle}
                  </h3>

                  <div className="mt-3 space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const active = lesson.id === currentLesson.id;
                      const completed = completedLessonIds.has(lesson.id);

                      return (
                        <button
                          key={lesson.id}
                          type="button"
                          onClick={() => setCurrentLessonSlug(lesson.lesson_slug)}
                          className={`block w-full rounded-xl border px-4 py-3 text-left transition ${
                            active
                              ? "border-cyan-400/30 bg-cyan-400/10"
                              : "border-white/10 bg-black/20 hover:bg-white/5"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="text-xs text-slate-400">
                                Lesson {lessonIndex + 1}
                              </p>
                              <p className="mt-1 text-sm font-medium text-white">
                                {lesson.lesson_title}
                              </p>
                            </div>

                            <span
                              className={`mt-1 inline-flex h-6 min-w-6 items-center justify-center rounded-full px-2 text-xs font-semibold ${
                                completed
                                  ? "bg-cyan-400 text-slate-950"
                                  : "bg-white/10 text-slate-300"
                              }`}
                            >
                              {completed ? "✓" : lessonIndex + 1}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <section className="min-w-0 rounded-[24px] border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
                  {currentLesson.module_title || "Lesson"}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {currentLesson.lesson_title}
                </h2>
              </div>

              <div className="w-full md:w-auto">
                <LessonCompleteButton
                  courseSlug={slug}
                  lessonId={currentLesson.id}
                  completed={completedLessonIds.has(currentLesson.id)}
                />
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
              {currentLesson.video_url ? (
                isVideoFile(currentLesson.video_url) ? (
                  <video
                    key={currentLesson.id}
                    controls
                    preload="metadata"
                    className="aspect-video w-full"
                    src={currentLesson.video_url}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="aspect-video w-full">
                    <iframe
                      key={currentLesson.id}
                      src={currentLesson.video_url}
                      title={currentLesson.lesson_title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                )
              ) : (
                <div className="flex aspect-video items-center justify-center px-6 text-center">
                  <div>
                    <p className="text-lg font-semibold text-white">
                      Video placeholder
                    </p>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                      Add your recorded lesson video URL to this lesson record
                      and it will appear here automatically.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 space-y-5">
              {contentParagraphs.length > 0 ? (
                contentParagraphs.map((paragraph, index) => (
                  <p
                    key={`${currentLesson.id}-${index}`}
                    className="text-base leading-8 text-slate-300"
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-base leading-8 text-slate-400">
                  No text content has been added for this lesson yet.
                </p>
              )}
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                {previousLesson ? (
                  <button
                    type="button"
                    onClick={() => setCurrentLessonSlug(previousLesson.lesson_slug)}
                    className="inline-flex rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                  >
                    ← Previous lesson
                  </button>
                ) : (
                  <span className="inline-flex rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-500">
                    Start of course
                  </span>
                )}
              </div>

              <div>
                {nextLesson ? (
                  <button
                    type="button"
                    onClick={() => setCurrentLessonSlug(nextLesson.lesson_slug)}
                    className="inline-flex rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                  >
                    Next lesson →
                  </button>
                ) : (
                  <span className="inline-flex rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950">
                    Course section completed
                  </span>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
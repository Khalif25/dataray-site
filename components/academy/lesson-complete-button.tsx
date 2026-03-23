"use client";

import { useState } from "react";

type LessonCompleteButtonProps = {
  courseSlug: string;
  lessonId: string;
  completed: boolean;
};

export default function LessonCompleteButton({
  courseSlug,
  lessonId,
  completed,
}: LessonCompleteButtonProps) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const [localCompleted, setLocalCompleted] = useState(completed);

  async function handleToggle() {
    setError("");
    setIsPending(true);

    const nextCompleted = !localCompleted;

    setLocalCompleted(nextCompleted);

    try {
      const res = await fetch("/api/lesson-progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseSlug,
          lessonId,
          isCompleted: nextCompleted,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setLocalCompleted(!nextCompleted);
        setError(data.error || "Failed to update lesson progress.");
      }
    } catch {
      setLocalCompleted(!nextCompleted);
      setError("Something went wrong while updating lesson progress.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handleToggle}
        disabled={isPending}
        className={`inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition ${
          localCompleted
            ? "border border-white/10 bg-white/5 text-white hover:bg-white/10"
            : "bg-cyan-400 text-slate-950 hover:brightness-110"
        }`}
      >
        {isPending
          ? "Updating..."
          : localCompleted
            ? "Mark as incomplete"
            : "Mark lesson complete"}
      </button>

      {error ? <p className="text-sm text-red-300">{error}</p> : null}
    </div>
  );
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EnrollButton({ courseSlug }: { courseSlug: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleEnroll = async () => {
    setLoading(true);

    const res = await fetch("/api/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ course_slug: courseSlug }),
    });

    if (res.status === 401) {
      router.push("/academy/login");
      return;
    }

    const data = await res.json();

    alert(data.message || "Enrollment submitted");
    router.push("/academy/dashboard");
  };

  return (
    <button
      onClick={handleEnroll}
      disabled={loading}
      className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:brightness-110 disabled:opacity-70"
    >
      {loading ? "Enrolling..." : "Enroll Now"}
    </button>
  );
}
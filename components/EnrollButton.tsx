"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function EnrollButton({
  courseSlug,
  isLive,
}: {
  courseSlug: string;
  isLive: boolean;
}) {
  const router = useRouter();
  const supabase = createClient();

  const handleClick = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // For live courses, send learner to payment page first.
    // For coming-soon courses, join waitlist directly.
    if (!user) {
      router.push(
        `/academy/register?course=${courseSlug}&action=${
          isLive ? "payment" : "waitlist"
        }`,
      );
      return;
    }

    if (isLive) {
      router.push(`/academy/payment?course=${courseSlug}`);
      return;
    }

    const res = await fetch("/api/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        course_slug: courseSlug,
        action: "waitlist",
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Something went wrong.");
      return;
    }

    alert(data.message || "You have been added to the waitlist.");
    router.push("/academy/dashboard");
    router.refresh();
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-xl bg-cyan-500 px-5 py-3 text-center font-semibold text-black transition hover:brightness-110"
    >
      {isLive ? "Enroll Now" : "Join Waitlist"}
    </button>
  );
}
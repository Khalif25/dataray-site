"use client";

import { usePathname } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function SiteTelemetry() {
  const pathname = usePathname();
  if (!pathname || pathname.startsWith("/academy")) return null;
  const beforeSend = <T extends { url: string }>(event: T) => {
    const url = new URL(event.url, window.location.origin);
    if (url.pathname.startsWith("/academy")) return null;
    url.search = "";
    url.hash = "";
    return { ...event, url: url.href };
  };
  return <>
    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
    <Analytics beforeSend={beforeSend} />
    <SpeedInsights beforeSend={beforeSend} />
  </>;
}

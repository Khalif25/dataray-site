"use client";

import Link, { LinkProps } from "next/link";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";
import { ReactNode } from "react";

type TrackedLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  eventName: AnalyticsEventName;
  category: string;
  label: string;
};

export default function TrackedLink({
  children,
  className,
  eventName,
  category,
  label,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      className={className}
      onClick={() => trackEvent(eventName, category, label)}
    >
      {children}
    </Link>
  );
}
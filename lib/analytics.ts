export type AnalyticsEventName =
  | "contact_submit"
  | "article_open"
  | "service_interest"
  | "course_interest";

type GtagFunction = (
  command: "event",
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
) => void;

declare global {
  interface Window {
    gtag?: GtagFunction;
  }
}

export function trackEvent(
  eventName: AnalyticsEventName,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", eventName, {
    event_category: category,
    event_label: label,
    value,
  });
}
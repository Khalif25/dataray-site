import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dataraysmart.com"),

  title: {
    default: "DataRay | AI, Data & Strategic Intelligence",
    template: "%s | DataRay",
  },

  description:
    "DataRay provides AI-driven analytics, dashboards, market intelligence, and decision-support systems for organizations.",

  keywords: [
    "AI analytics",
    "data science",
    "business intelligence",
    "dashboards",
    "AI strategy",
    "data analytics consulting",
    "machine learning analytics",
  ],

  authors: [{ name: "DataRay" }],
  creator: "DataRay",

  openGraph: {
    title: "DataRay | AI, Data & Strategic Intelligence",
    description:
      "AI-driven analytics, dashboards, research insights, and strategic intelligence.",
    url: "https://www.dataraysmart.com",
    siteName: "DataRay",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DataRay",
    description:
      "AI-driven analytics, dashboards, and strategic intelligence.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white antialiased">
        {/* Background grid */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <Navbar />

        {children}

        <Footer />

        {/* Google Analytics */}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />

        {/* Vercel Analytics (user tracking) */}
        <Analytics />

        {/* Vercel Speed Insights (performance tracking) */}
        <SpeedInsights />
      </body>
    </html>
  );
}
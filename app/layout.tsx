import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SITE_URL } from "@/lib/site-url";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "DataRay Smart Solutions",

  title: {
    default: "DataRay Smart Solutions",
    template: "%s | DataRay Smart Solutions",
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

  authors: [{ name: "DataRay Smart Solutions" }],
  creator: "DataRay Smart Solutions",
  publisher: "DataRay Smart Solutions",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "1024x1024", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/icon.png"],
  },

  openGraph: {
    title: "DataRay Smart Solutions",
    description:
      "AI-driven analytics, dashboards, research insights, and strategic intelligence.",
    url: SITE_URL,
    siteName: "DataRay Smart Solutions",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "DataRay Smart Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DataRay Smart Solutions",
    description:
      "AI-driven analytics, dashboards, and strategic intelligence.",
    images: [`${SITE_URL}/og-image.png`],
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

        {/* Web analytics */}
        <Analytics />

        {/* Speed insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://dataray-site.vercel.app"),
    verification: {
    google: "xhDx1ORWU4GNhzdiB6J3O0xjq_SbLCSeFIdPreyyPJ0",
  },


  
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
    url: "https://dataray-site.vercel.app",
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
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

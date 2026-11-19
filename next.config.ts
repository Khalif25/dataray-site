import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const SITE_URL = "https://www.dataraysmart.com";
const ERP_HOST = "erp.dataraysmart.com";
const VERCEL_DEPLOYMENT_HOST = "dataray-site\\.vercel\\.app";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: [
      { key: "X-Frame-Options", value: "DENY" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
      { key: "Content-Security-Policy", value: "frame-ancestors 'none'; object-src 'none'; base-uri 'self'" },
      { key: "Content-Security-Policy-Report-Only", value: "default-src 'self'; script-src 'self' https://www.googletagmanager.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://*.supabase.co wss://*.supabase.co https://*.google-analytics.com https://*.analytics.google.com https://vitals.vercel-insights.com; frame-src https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" },
    ] }];
  },
  async rewrites() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: ERP_HOST,
          },
        ],
        destination: "/erp",
      },
      {
        source: "/login",
        has: [
          {
            type: "host",
            value: ERP_HOST,
          },
        ],
        destination: "/erp/login",
      },
      {
        source: "/lite/login",
        has: [
          {
            type: "host",
            value: ERP_HOST,
          },
        ],
        destination: "/erp/access",
      },
      {
        source: "/standard/login",
        has: [
          {
            type: "host",
            value: ERP_HOST,
          },
        ],
        destination: "/erp/access",
      },
      {
        source: "/plus/login",
        has: [
          {
            type: "host",
            value: ERP_HOST,
          },
        ],
        destination: "/erp/plus/login",
      },
      {
        source: "/demo",
        has: [
          {
            type: "host",
            value: ERP_HOST,
          },
        ],
        destination: "/erp/demo",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: VERCEL_DEPLOYMENT_HOST,
          },
        ],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
      {
        source: "/laspro",
        destination: `${SITE_URL}/erp#erp`,
        permanent: true,
      },
      {
        source: "/laspro/:path*",
        destination: `${SITE_URL}/erp#erp`,
        permanent: true,
      },
      {
        source: "/lasocodpro/:path*",
        has: [
          {
            type: "host",
            value: "dataraysmart.com",
          },
        ],
        destination: `${SITE_URL}/erp#erp`,
        permanent: true,
      },
      {
        source: "/lasocodpro/:path*",
        destination: "/erp#erp",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "dataraysmart.com",
          },
        ],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);

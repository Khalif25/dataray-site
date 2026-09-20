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

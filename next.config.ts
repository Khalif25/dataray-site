import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const SITE_URL = "https://www.dataraysmart.com";
const ERP_HOST = "erp.dataraysmart.com";
const ERP_APP_URL = (
  process.env.ERP_APP_URL ||
  process.env.NEXT_PUBLIC_ERP_APP_URL ||
  `https://${ERP_HOST}`
).replace(/\/$/, "");

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
      ...(ERP_APP_URL
        ? [
            {
              source: "/erp",
              destination: ERP_APP_URL,
              permanent: false,
            },
            {
              source: "/erp/:path*",
              destination: `${ERP_APP_URL}/:path*`,
              permanent: false,
            },
          ]
        : []),
      {
        source: "/lasocodpro/:path*",
        has: [
          {
            type: "host",
            value: "dataraysmart.com",
          },
        ],
        destination: `${SITE_URL}/laspro`,
        permanent: true,
      },
      {
        source: "/lasocodpro/:path*",
        destination: "/laspro",
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

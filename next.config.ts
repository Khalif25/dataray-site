import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const SITE_URL = "https://www.dataraysmart.com";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
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

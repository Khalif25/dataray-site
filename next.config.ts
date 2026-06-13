import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/lasocodpro/:path*",
        destination: "/laspro",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);

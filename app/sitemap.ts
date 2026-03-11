import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dataray-site.vercel.app";

  return [
    {
      url: base,
      lastModified: new Date(),
    },
    {
      url: `${base}/services`,
      lastModified: new Date(),
    },
    {
      url: `${base}/insights`,
      lastModified: new Date(),
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
    },
  ];
}

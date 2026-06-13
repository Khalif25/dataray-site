import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/laspro"],
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/login/",
          "/app/",
          "/academy/dashboard",
          "/academy/learn",
          "/academy/payment",
          "/academy/login",
          "/academy/register",
          "/academy/reset-password",
          "/academy/forgot-password",
        ],
      },
    ],
    sitemap: "https://dataraysmart.com/sitemap.xml",
  };
}

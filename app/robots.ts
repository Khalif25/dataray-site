import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

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
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

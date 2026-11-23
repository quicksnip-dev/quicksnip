import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/meta";

/** Everyone, including AI crawlers, is welcome: being readable by AI tools is the point. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

import type { MetadataRoute } from "next"
import { articles, SITE_URL } from "@/lib/articles"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/resources", "/tiktok"].map((route) => ({ url: `${SITE_URL}${route}`, lastModified: new Date(), changeFrequency: route === "/resources" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : 0.8 }))
  const articleRoutes = articles.map((article) => ({ url: `${SITE_URL}/resources/${article.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 }))
  return [...staticRoutes, ...articleRoutes]
}

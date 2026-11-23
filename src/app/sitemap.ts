import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/meta";
import { getSnippetIndex } from "@/lib/snippets";
import { source } from "@/lib/source";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const snippets = getSnippetIndex();
  const categories = [...new Set(snippets.map((s) => s.category))];

  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly",
  ) => ({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency, priority });

  return [
    page("/", 1, "weekly"),
    page("/snippets", 0.9, "daily"),
    page("/community", 0.5, "monthly"),
    page("/extensions", 0.5, "monthly"),
    page("/contributing", 0.5, "monthly"),
    ...source.getPages().map((p) => page(p.url, 0.7, "monthly")),
    ...categories.map((c) => page(`/snippets/${c}`, 0.7, "weekly")),
    ...snippets.map((s) => page(`/snippets/${s.category}/${s.slug}`, s.verified ? 0.8 : 0.6, "monthly")),
  ];
}

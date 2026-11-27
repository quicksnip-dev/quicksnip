// .source folder will be generated when you run `next dev`
import { blogPosts, docs } from "../../.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

export const source = loader({
  baseUrl: "/guide",
  source: docs.toFumadocsSource(),
});

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogPosts),
});

/** Blog posts, newest first. */
export function getBlogPosts() {
  return blog.getPages().sort((a, b) => b.data.date.localeCompare(a.data.date));
}

/** Formats an ISO date (`2026-11-27`) as "November 27, 2026". */
export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

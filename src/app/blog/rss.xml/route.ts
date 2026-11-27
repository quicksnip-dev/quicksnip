import { SITE_URL } from "@/data/meta";
import { getBlogPosts } from "@/lib/source";

export const dynamic = "force-static";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const posts = getBlogPosts();
  const items = posts
    .map((p) => {
      const url = `${SITE_URL}${p.url}`;
      return `    <item>
      <title>${escape(p.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(p.data.description)}</description>
      <pubDate>${new Date(`${p.data.date}T00:00:00Z`).toUTCString()}</pubDate>
${p.data.tags.map((t) => `      <category>${escape(t)}</category>`).join("\n")}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>QuickSnip Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Everyday utilities explained properly, with tested code you can install.</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}

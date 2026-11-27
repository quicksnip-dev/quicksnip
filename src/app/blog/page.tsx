import type { Metadata } from "next";
import Link from "next/link";
import { Rss } from "lucide-react";
import JsonLd from "@/components/ui/json-ld";
import { SITE_URL } from "@/data/meta";
import { formatDate, getBlogPosts } from "@/lib/source";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Blog",
    description:
      "Practical guides for JavaScript and TypeScript developers: utilities explained with tested code, and how to make AI coding tools use it.",
    path: "/blog",
  }),
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/blog/rss.xml" } },
};

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <main className="wrapper-2xs py-12 lg:py-20">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "QuickSnip Blog",
          url: `${SITE_URL}/blog`,
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.data.title,
            url: `${SITE_URL}${p.url}`,
            datePublished: p.data.date,
          })),
        }}
      />
      <header className="mb-12 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="mt-3 text-secondary-foreground">
            Everyday utilities explained properly, with tested code you can install.
          </p>
        </div>
        <Link
          href="/blog/rss.xml"
          className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-brand"
        >
          <Rss size={16} /> RSS
        </Link>
      </header>

      <ul className="divide-y divide-border border-y border-border">
        {posts.map((post) => (
          <li key={post.url}>
            <Link href={post.url} className="group block py-6">
              <time dateTime={post.data.date} className="text-sm text-muted-foreground">
                {formatDate(post.data.date)}
              </time>
              <h2 className="mt-1 text-xl font-semibold transition-colors group-hover:text-brand">{post.data.title}</h2>
              <p className="mt-2 text-secondary-foreground line-clamp-2">{post.data.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

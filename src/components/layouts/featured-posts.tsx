import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getBlogPosts } from "@/lib/source";

/** Up to three posts marked `featured: true`, as an editorial list (no cards, unlike the sections above). */
export default function FeaturedPosts() {
  const posts = getBlogPosts()
    .filter((p) => p.data.featured)
    .slice(0, 3);
  if (!posts.length) return null;

  return (
    <section aria-labelledby="featured-posts" className="wrapper py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        <div className="space-y-3">
          <h2 id="featured-posts" className="text-3xl font-bold">
            From the blog
          </h2>
          <p className="text-muted-foreground">The utilities developers search for most, explained with tested code.</p>
          <Link href="/blog" className="inline-flex items-center gap-1 text-brand hover:underline">
            All posts <ArrowRight size={14} />
          </Link>
        </div>

        <ol className="divide-y divide-border border-y border-border">
          {posts.map((post, i) => (
            <li key={post.url}>
              <Link href={post.url} className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-5 py-6">
                <span className="font-mono text-sm text-muted-foreground tabular-nums">0{i + 1}</span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-brand">{post.data.title}</h3>
                  <p className="mt-1 line-clamp-2 text-muted-foreground">{post.data.description}</p>
                </div>
                <ArrowUpRight
                  size={20}
                  aria-hidden="true"
                  className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

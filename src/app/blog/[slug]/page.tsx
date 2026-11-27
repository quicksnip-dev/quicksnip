import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileText } from "lucide-react";
import { getMDXComponents } from "../../../../mdx-components";
import JsonLd from "@/components/ui/json-ld";
import VerifiedBadge from "@/components/ui/verified-badge";
import { AUTHOR, GITHUB_URL, SITE_URL } from "@/data/meta";
import { blog, formatDate } from "@/lib/source";
import { getSnippetIndex } from "@/lib/snippets";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return blog.getPages().map((p) => ({ slug: p.slugs[0] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.getPage([slug]);
  if (!post) return {};
  const meta = pageMetadata({
    title: post.data.title,
    description: post.data.description,
    path: post.url,
    type: "article",
    keywords: post.data.tags,
    hasOwnImage: true,
  });
  return {
    ...meta,
    authors: [{ name: post.data.author, url: AUTHOR.github }],
    alternates: { canonical: post.url, types: { "text/markdown": `${post.url}.md` } },
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: post.data.date,
      modifiedTime: post.data.updated ?? post.data.date,
      authors: [post.data.author],
      tags: post.data.tags,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blog.getPage([slug]);
  if (!post) notFound();

  const MDX = post.data.body;
  const url = `${SITE_URL}${post.url}`;
  const snippets = getSnippetIndex();
  const related = post.data.snippets
    .map((id) => snippets.find((s) => `${s.category}/${s.slug}` === id))
    .filter((s) => s !== undefined);

  return (
    <main className="wrapper-2xs py-12 lg:py-16">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.data.title,
            description: post.data.description,
            url,
            mainEntityOfPage: url,
            image: `${url}/opengraph-image`,
            datePublished: post.data.date,
            dateModified: post.data.updated ?? post.data.date,
            keywords: post.data.tags.join(", "),
            author: { "@type": "Person", name: post.data.author, url: AUTHOR.github },
            publisher: { "@type": "Organization", name: "QuickSnip", logo: `${SITE_URL}/icon-512.png` },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 2, name: post.data.title, item: url },
            ],
          },
        ]}
      />

      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-brand"
      >
        <ArrowLeft size={16} /> Blog
      </Link>

      <article>
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">{post.data.title}</h1>
          <p className="mt-4 text-lg text-secondary-foreground">{post.data.description}</p>
          <p className="mt-6 text-sm text-muted-foreground">
            <Link href={AUTHOR.github} className="font-medium text-foreground hover:text-brand">
              {post.data.author}
            </Link>
            {" · "}
            <time dateTime={post.data.date}>{formatDate(post.data.date)}</time>
            {post.data.updated ? (
              <>
                {" · Updated "}
                <time dateTime={post.data.updated}>{formatDate(post.data.updated)}</time>
              </>
            ) : null}
          </p>
        </header>

        <div className="prose">
          <MDX components={getMDXComponents()} />
        </div>
      </article>

      {related.length > 0 ? (
        <aside aria-labelledby="related" className="mt-14 rounded-lg border border-border p-5">
          <h2 id="related" className="mb-3 font-semibold">
            Snippets in this post
          </h2>
          <ul className="space-y-2">
            {related.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/snippets/${s.category}/${s.slug}`}
                  className="flex items-center gap-2 text-secondary-foreground transition-colors hover:text-brand"
                >
                  {s.title}
                  {s.verified ? <VerifiedBadge compact /> : null}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}

      <footer className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <Link
          href={`${GITHUB_URL}/blob/main/content/blog/${post.path}`}
          className="transition-colors hover:text-brand"
        >
          Suggest an edit
        </Link>
        <Link href={`${post.url}.md`} className="inline-flex items-center gap-1 transition-colors hover:text-brand">
          <FileText size={14} /> View as Markdown
        </Link>
      </footer>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Pencil } from "lucide-react";

import CodePreview, { CodeBlock, type CodeTab } from "@/components/layouts/code-preview";
import CopyButton from "@/components/ui/copy-button";
import VerifiedBadge from "@/components/ui/verified-badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import JsonLd from "@/components/ui/json-ld";
import { getSnippet, getSnippetIndex } from "@/lib/snippets";
import { unslugify } from "@/lib/utils";
import { GITHUB_URL, LANGUAGE_NAMES, SITE_URL, installCommand } from "@/data/meta";
import type { FullSnippet } from "@/types";
import { pageMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ category: string; snippet: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getSnippetIndex().map((s) => ({ category: s.category, snippet: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, snippet } = await params;
  const data = getSnippet(category, snippet);
  if (!data) return {};
  const langs = data.languages.map((l) => LANGUAGE_NAMES[l] ?? l);
  const title = `${data.title} — ${langs.slice(0, 3).join(", ")}${langs.length > 3 ? " +" + (langs.length - 3) : ""}`;
  const description = `${data.description}${data.verified ? " Typed, tested and" : ""}${
    data.installable ? `${data.verified ? "" : " Also"} installable with one command.` : ""
  }`.trim();
  const url = `/snippets/${data.category}/${data.slug}`;
  return pageMetadata({
    title,
    description,
    path: url,
    type: "article",
    hasOwnImage: true,
    keywords: [data.title, data.slug, ...data.tags, ...langs.map((l) => `${l} ${data.title}`)],
  });
}

function jsonLd(data: FullSnippet) {
  const url = `${SITE_URL}/snippets/${data.category}/${data.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: data.title,
      description: data.description,
      url,
      codeRepository: `${GITHUB_URL}/tree/main/snippets/${data.category}/${data.slug}`,
      programmingLanguage: data.languages.map((l) => LANGUAGE_NAMES[l] ?? l),
      license: "https://opensource.org/licenses/MIT",
      keywords: data.tags.join(", "),
      author: data.contributors.map((c) => ({ "@type": "Person", name: c, url: `https://github.com/${c}` })),
      isAccessibleForFree: true,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Snippets", item: `${SITE_URL}/snippets` },
        { "@type": "ListItem", position: 2, name: unslugify(data.category), item: `${SITE_URL}/snippets/${data.category}` },
        { "@type": "ListItem", position: 3, name: data.title, item: url },
      ],
    },
  ];
}

function installTabs(data: FullSnippet): CodeTab[] {
  if (!data.installable) return [];
  const url = `${SITE_URL}/r/${data.name}.json`;
  return [
    { value: "shadcn", label: "shadcn CLI", language: "sh", code: installCommand(data.name) },
    {
      value: "ai",
      label: "AI prompt",
      language: "markdown",
      code: `Install the "${data.title}" utility from QuickSnip instead of writing it yourself:\n${installCommand(
        data.name,
      )}\nThen import it from the project's lib folder.`,
    },
    { value: "json", label: "Registry JSON", language: "sh", code: url },
  ];
}

export default async function SnippetPage({ params }: Props) {
  const { category, snippet } = await params;
  const data = getSnippet(category, snippet);
  if (!data) notFound();

  const codeTabs: CodeTab[] = data.languages.map((lang) => ({
    value: lang,
    label: LANGUAGE_NAMES[lang] ?? lang,
    language: lang,
    code: data.code[lang],
    icon: lang,
  }));
  if (data.tests) codeTabs.push({ value: "tests", label: "Tests", language: "ts", code: data.tests });

  const usageTabs: CodeTab[] = Object.entries(data.usage ?? {}).map(([lang, lines]) => ({
    value: lang,
    label: LANGUAGE_NAMES[lang] ?? lang,
    language: lang,
    code: lines.join("\n"),
    icon: lang,
  }));

  const install = installTabs(data);
  const sourceUrl = `${GITHUB_URL}/tree/main/snippets/${data.category}/${data.slug}`;

  return (
    <article className="max-w-4xl space-y-8 pb-12">
      <JsonLd data={jsonLd(data)} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/snippets" className="hover:text-foreground">
          Snippets
        </Link>
        <ChevronRight size={14} />
        <Link href={`/snippets/${data.category}`} className="hover:text-foreground">
          {unslugify(data.category)}
        </Link>
      </nav>

      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          {data.verified ? <VerifiedBadge /> : null}
        </div>
        <p className="text-lg text-muted-foreground">{data.description}</p>
        {data.tags.length ? (
          <ul className="flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <li key={tag} className="rounded-md border border-border px-2 py-0.5 text-sm text-muted-foreground">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      {install.length ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Install</h2>
          <CodePreview tabs={install} />
          {!data.verified ? (
            <p className="text-sm text-muted-foreground">
              This snippet is not verified yet. Review it before use, or{" "}
              <Link className="text-brand hover:underline" href="/guide/contributing/verifying-snippets">
                help verify it
              </Link>
              .
            </p>
          ) : null}
        </section>
      ) : null}

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Code</h2>
        <CodePreview tabs={codeTabs} />
      </section>

      {usageTabs.length ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Usage</h2>
          {usageTabs.length === 1 ? (
            <CodeBlock code={usageTabs[0].code} language={usageTabs[0].language} />
          ) : (
            <CodePreview tabs={usageTabs} />
          )}
        </section>
      ) : null}

      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Contributors</span>
          <div className="flex -space-x-2">
            {data.contributors.map((contributor) => (
              <Link
                key={contributor}
                href={`https://github.com/${contributor}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`@${contributor}`}
              >
                <Avatar className="size-8 ring-2 ring-background">
                  <AvatarImage src={`https://github.com/${contributor}.png?size=64`} alt={`@${contributor}`} />
                  <AvatarFallback>{contributor.slice(0, 2)}</AvatarFallback>
                </Avatar>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-muted-foreground">ID</span>
          <code className="rounded bg-muted px-1.5 py-0.5">{data.name}</code>
          <CopyButton value={data.name} label="Copy snippet ID" />
          <Link
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
          >
            <Pencil size={14} /> Edit on GitHub
          </Link>
        </div>
      </footer>
    </article>
  );
}

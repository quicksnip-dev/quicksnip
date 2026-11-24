import type { Metadata } from "next";
import SnippetList from "@/components/layouts/snippet-list";
import { getListSnippets, getSnippetSummary } from "@/lib/snippets";
import { pageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  const { total, verified } = getSnippetSummary();
  return pageMetadata({
    title: "All snippets",
    description: `Browse ${total} community-made code snippets in many languages. ${verified} verified TypeScript utilities install with one command.`,
    path: "/snippets",
  });
}

export default function SnippetsPage() {
  return (
    <section className="space-y-4">
      <h1 className="sr-only">All snippets</h1>
      <SnippetList snippets={getListSnippets()} />
    </section>
  );
}

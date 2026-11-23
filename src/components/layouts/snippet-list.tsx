"use client";

import Link from "next/link";
import SnippetItem from "@/components/ui/snippet-item";
import { Skeleton } from "@/components/ui/skeleton";
import { filterSnippets, useSnippetsStore } from "@/store/useSnippetsStore";

export default function SnippetList({ category }: { category?: string }) {
  const { snippets, loaded, query, language, verifiedOnly } = useSnippetsStore();

  if (!loaded) {
    return (
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {Array.from({ length: 12 }, (_, i) => (
          <Skeleton key={i} className="h-32 rounded-xl" />
        ))}
      </ul>
    );
  }

  const results = filterSnippets(snippets, { query, language, verifiedOnly, category });

  if (!results.length) {
    return (
      <p className="py-16 text-center text-muted-foreground">
        No snippets found{query ? ` for “${query}”` : ""}. Try another search or{" "}
        <Link className="text-accent underline-offset-4 hover:underline" href="/guide/contributing/adding-snippets">
          add it yourself
        </Link>
        .
      </p>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">
        {results.length} {results.length === 1 ? "snippet" : "snippets"}
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {results.map((snippet) => (
          <SnippetItem key={snippet.id} snippet={snippet} />
        ))}
      </ul>
    </div>
  );
}

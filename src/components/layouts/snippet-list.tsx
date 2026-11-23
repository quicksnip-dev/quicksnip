"use client";

import Link from "next/link";
import SnippetItem from "@/components/ui/snippet-item";
import { filterSnippets, useSnippetsStore } from "@/store/useSnippetsStore";
import type { ListSnippet } from "@/types";

/** Server-rendered grid (crawlable links) that filters instantly on the client. */
export default function SnippetList({ snippets }: { snippets: ListSnippet[] }) {
  const query = useSnippetsStore((s) => s.query);
  const language = useSnippetsStore((s) => s.language);
  const verifiedOnly = useSnippetsStore((s) => s.verifiedOnly);

  const results = filterSnippets(snippets, { query, language, verifiedOnly });

  if (!results.length) {
    return (
      <p className="py-16 text-center text-muted-foreground">
        No snippets found{query ? ` for “${query}”` : ""}. Try another search or{" "}
        <Link className="text-brand underline-offset-4 hover:underline" href="/guide/contributing/adding-snippets">
          add it yourself
        </Link>
        .
      </p>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground" aria-live="polite">
        {results.length} {results.length === 1 ? "snippet" : "snippets"}
      </p>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {results.map((snippet) => (
          <SnippetItem key={snippet.id} snippet={snippet} />
        ))}
      </ul>
    </div>
  );
}

import SnippetItem from "../ui/snippet-item";

import type { SnippetType } from "@/types";

interface SnippetListProps {
  snippets: SnippetType[];
}

export default function SnippetList({ snippets }: SnippetListProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-3 md:grid-cols-3">
      {snippets.map((snippet) => (
        <SnippetItem key={snippet.id} snippet={snippet} />
      ))}
    </ul>
  );
}

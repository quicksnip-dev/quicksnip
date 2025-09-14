import SnippetItem from "../ui/snippet-item";

import type { SnippetType } from "@/types";

export default function SnippetList() {
  const snippets: SnippetType[] = [];

  return (
    <ul>
      {snippets.map((snippet) => (
        <SnippetItem snippet={snippet} />
      ))}
    </ul>
  );
}

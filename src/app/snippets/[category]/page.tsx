"use client";

import SnippetList from "@/components/layouts/snippet-list";
import { unslugify } from "@/lib/utils";
import { useSnippetsStore } from "@/store/useSnippetsStore";
import { use } from "react";

interface Props {
  params: Promise<{ category: string }>;
}

export default function Categories({ params }: Props) {
  const { snippets } = useSnippetsStore();
  const { category } = use(params);

  const filteredSnippets = snippets.filter(
    (snippet) => snippet.category === category
  );

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">{unslugify(category)}</h2>
      <SnippetList snippets={filteredSnippets} />
    </section>
  );
}

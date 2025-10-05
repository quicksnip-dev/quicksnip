"use client";

import SnippetList from "@/components/layouts/snippet-list";
import { useSnippetsStore } from "@/store/useSnippetsStore";
import { useEffect } from "react";

export default function SnippetsPage() {
  const { setSnippets, snippets } = useSnippetsStore();

  useEffect(() => {
    fetch("/data/snippets/all.json")
      .then((res) => res.json())
      .then((data) => setSnippets(data));
  }, [setSnippets]);

  // This is for showing all the snippets
  return <SnippetList snippets={snippets} />;
}

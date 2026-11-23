"use client";

import { useEffect } from "react";
import { useSnippetsStore } from "@/store/useSnippetsStore";

/** Loads the snippet index once for the whole /snippets section. */
export default function SnippetsLoader() {
  const load = useSnippetsStore((s) => s.load);
  useEffect(() => {
    load();
  }, [load]);
  return null;
}

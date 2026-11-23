import { create } from "zustand";
import type { SnippetType } from "@/types";

interface SnippetsStore {
  snippets: SnippetType[];
  loaded: boolean;
  query: string;
  language: string;
  verifiedOnly: boolean;

  load: () => Promise<void>;
  setQuery: (query: string) => void;
  setLanguage: (language: string) => void;
  setVerifiedOnly: (verifiedOnly: boolean) => void;
}

export const useSnippetsStore = create<SnippetsStore>((set, get) => ({
  snippets: [],
  loaded: false,
  query: "",
  language: "all",
  verifiedOnly: false,

  load: async () => {
    if (get().loaded) return;
    const res = await fetch("/data/snippets/index.json");
    const snippets: SnippetType[] = await res.json();
    set({ snippets, loaded: true });
  },
  setQuery: (query) => set({ query }),
  setLanguage: (language) => set({ language }),
  setVerifiedOnly: (verifiedOnly) => set({ verifiedOnly }),
}));

/** Category name → number of snippets, sorted by name. */
export function countCategories(snippets: SnippetType[]) {
  const counts = new Map<string, number>();
  for (const s of snippets) counts.set(s.category, (counts.get(s.category) ?? 0) + 1);
  return [...counts.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([name, count]) => ({ name, count }));
}

/** Languages present in the collection, most common first. */
export function countLanguages(snippets: SnippetType[]) {
  const counts = new Map<string, number>();
  for (const s of snippets) for (const l of s.languages) counts.set(l, (counts.get(l) ?? 0) + 1);
  return [...counts.entries()].sort(([, a], [, b]) => b - a).map(([name, count]) => ({ name, count }));
}

/** Filters and ranks snippets: title matches first, then verified, then alphabetical. */
export function filterSnippets(
  snippets: SnippetType[],
  { query, language, verifiedOnly, category }: { query: string; language: string; verifiedOnly: boolean; category?: string },
) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const scored: { snippet: SnippetType; score: number }[] = [];

  for (const snippet of snippets) {
    if (category && snippet.category !== category) continue;
    if (verifiedOnly && !snippet.verified) continue;
    if (language !== "all" && !snippet.languages.includes(language)) continue;

    let score = 0;
    if (terms.length) {
      const title = snippet.title.toLowerCase();
      const haystack = [snippet.slug, snippet.description, snippet.category, ...snippet.tags].join(" ").toLowerCase();
      let matchedAll = true;
      for (const term of terms) {
        if (title.includes(term)) score += 3;
        else if (haystack.includes(term)) score += 1;
        else matchedAll = false;
      }
      if (!matchedAll) continue;
    }
    if (snippet.verified) score += 0.5;
    scored.push({ snippet, score });
  }

  return scored
    .sort((a, b) => b.score - a.score || a.snippet.title.localeCompare(b.snippet.title))
    .map(({ snippet }) => snippet);
}

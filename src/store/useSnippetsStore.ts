import { create } from "zustand";
import type { ListSnippet } from "@/types";

/** UI state shared by the snippets header, sidebar and list. Snippet data comes from the server. */
interface SnippetsStore {
  query: string;
  language: string;
  verifiedOnly: boolean;

  setQuery: (query: string) => void;
  setLanguage: (language: string) => void;
  setVerifiedOnly: (verifiedOnly: boolean) => void;
}

export const useSnippetsStore = create<SnippetsStore>((set) => ({
  query: "",
  language: "all",
  verifiedOnly: false,

  setQuery: (query) => set({ query }),
  setLanguage: (language) => set({ language }),
  setVerifiedOnly: (verifiedOnly) => set({ verifiedOnly }),
}));

/** Filters and ranks snippets: title matches first, then verified, then alphabetical. */
export function filterSnippets(
  snippets: ListSnippet[],
  { query, language, verifiedOnly }: { query: string; language: string; verifiedOnly: boolean },
) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const scored: { snippet: ListSnippet; score: number }[] = [];

  for (const snippet of snippets) {
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

import { SnippetType } from "@/types";
import { create } from "zustand";

interface SnippetsStore {
  snippets: SnippetType[];
  selectedCategory: string;

  setSnippets: (snippets: SnippetType[]) => void;
  setCategory: (category: string) => void;

  categories: () => { name: string; count: number }[];
}

export const useSnippetsStore = create<SnippetsStore>((set, get) => ({
  snippets: [],
  selectedLanguage: "",
  selectedCategory: "all",

  setSnippets: (snippets) => set({ snippets: snippets }),
  setCategory: (category) => set({ selectedCategory: category }),

  categories: () => {
    const { snippets } = get();
    const counts: Record<string, number> = {};

    snippets.forEach((snippet) => {
      if (counts[snippet.category]) {
        counts[snippet.category]++;
      } else {
        counts[snippet.category] = 1;
      }
    });

    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  },
}));

// Server-side only: reads the generated JSON from disk at build/render time.
import fs from "fs";
import path from "path";
import type { FullSnippet, ListSnippet, SnippetType } from "@/types";

const DATA_DIR = path.join(process.cwd(), "public", "data", "snippets");

let cache: SnippetType[] | undefined;

/** Reads the generated snippet index. Run `npm run snippets` if it is missing. */
export function getSnippetIndex(): SnippetType[] {
  if (cache) return cache;
  const file = path.join(DATA_DIR, "index.json");
  if (!fs.existsSync(file)) return [];
  cache = JSON.parse(fs.readFileSync(file, "utf-8")) as SnippetType[];
  return cache;
}

export function getSnippet(category: string, slug: string): FullSnippet | null {
  if (!/^[a-z0-9-]+$/.test(category) || !/^[a-z0-9-]+$/.test(slug)) return null;
  const file = path.join(DATA_DIR, category, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

/** Live project numbers for the homepage. */
export function getStats() {
  const snippets = getSnippetIndex();
  return {
    snippets: snippets.length,
    verified: snippets.filter((s) => s.verified).length,
    contributors: new Set(snippets.flatMap((s) => s.contributors)).size,
  };
}

/** Only the fields the list UI needs, to keep the page payload small. */
export function getListSnippets(category?: string): ListSnippet[] {
  return getSnippetIndex()
    .filter((s) => !category || s.category === category)
    .map(({ id, category, slug, title, description, tags, languages, verified }) => ({
      id,
      category,
      slug,
      title,
      description,
      tags,
      languages,
      verified,
    }));
}

export type SnippetSummary = {
  total: number;
  verified: number;
  categories: { name: string; count: number }[];
  languages: { name: string; count: number }[];
};

export function getSnippetSummary(): SnippetSummary {
  const snippets = getSnippetIndex();
  const categories = new Map<string, number>();
  const languages = new Map<string, number>();
  for (const s of snippets) {
    categories.set(s.category, (categories.get(s.category) ?? 0) + 1);
    for (const l of s.languages) languages.set(l, (languages.get(l) ?? 0) + 1);
  }
  return {
    total: snippets.length,
    verified: snippets.filter((s) => s.verified).length,
    categories: [...categories].sort(([a], [b]) => a.localeCompare(b)).map(([name, count]) => ({ name, count })),
    languages: [...languages].sort(([, a], [, b]) => b - a).map(([name, count]) => ({ name, count })),
  };
}

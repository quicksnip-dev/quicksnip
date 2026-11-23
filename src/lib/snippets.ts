// Server-side only: reads the generated JSON from disk at build/render time.
import fs from "fs";
import path from "path";
import type { FullSnippet, SnippetType } from "@/types";

const DATA_DIR = path.join(process.cwd(), "public", "data", "snippets");

/** Reads the generated snippet index. Run `npm run snippets` if it is missing. */
export function getSnippetIndex(): SnippetType[] {
  const file = path.join(DATA_DIR, "index.json");
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

export function getSnippet(category: string, slug: string): FullSnippet | null {
  if (!/^[a-z0-9-]+$/.test(category) || !/^[a-z0-9-]+$/.test(slug)) return null;
  const file = path.join(DATA_DIR, category, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

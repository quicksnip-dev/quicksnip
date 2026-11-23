/**
 * One-off migration: v1 (per-language markdown) + v2 (json+md pairs)
 * → v3 (one folder per snippet, one file per language).
 *
 * Kept in the repo as a record of how the community's snippets were carried
 * over. Every original author is preserved in `contributors`.
 *
 * Usage:
 *   git archive v1.1.0 snippets | tar -x -C <dir>
 *   npx tsx scripts/migrate-v1.ts <dir>/snippets
 */
import fs from "fs";
import path from "path";

const V1_DIR = process.argv[2];
const OUT_DIR = process.env.MIGRATE_OUT ?? path.join(process.cwd(), "snippets");

if (!V1_DIR || !fs.existsSync(V1_DIR)) {
  console.error("Pass the extracted v1 `snippets` directory as the first argument.");
  process.exit(1);
}

/** v1 `<language>/<category>` → v3 topic category */
const CATEGORY_MAP: Record<string, string> = {
  "string-manipulation": "string",
  "string-utilities": "string",
  "array-manipulation": "array",
  "list-manipulation": "array",
  "list-utilities": "array",
  "vector-manipulation": "array",
  "vector-manipulation.md": "array",
  "object-manipulation": "object",
  "number-formatting": "number",
  "mathematical-functions": "math",
  "math-and-numbers": "math",
  math: "math",
  "bit-manipulation": "bitwise",
  "date-and-time": "date",
  "date-time": "date",
  "datetime-utilities": "date",
  "function-utilities": "function",
  "dom-manipulation": "dom",
  "local-storage": "storage",
  "color-manipulation": "color",
  "file-handling": "file",
  "json-manipulation": "json",
  "error-handling": "error",
  search: "algorithm",
  sorting: "algorithm",
  "sqlite-database": "database",
  "data-structure-conversion": "data-structure",
  debugging: "debugging",
  "guid-utilities": "id",
  "jwt-utilities": "auth",
  monads: "functional",
  system: "system",
  linux: "system",
  "helper-types": "types",
  miscellaneous: "regex",
  "validation pattern": "regex",
  animations: "animation",
  buttons: "component",
  components: "component",
  effects: "effect",
  layouts: "layout",
  "basic-layouts": "layout",
  typography: "typography",
  "borders-shadows": "effect",
  utilities: "style-utility",
};

/** Frameworks get their own category regardless of v1 sub-category. */
const FRAMEWORK_MAP: Record<string, string> = {
  "[react]": "react",
  "[fastapi]": "fastapi",
  "[tkinter]": "tkinter",
};

/** Short, predictable ids — the names an AI (or a human) would guess first. */
const RENAME: Record<string, string> = {
  "convert-string-to-camel-case": "camel-case",
  "convert-string-to-param-case": "kebab-case",
  "convert-string-to-pascal-case": "pascal-case",
  "convert-string-to-snake-case": "snake-case",
  "convert-string-to-title-case": "title-case",
  "string-to-camel-case": "camel-case",
  "string-to-param-case": "kebab-case",
  "string-to-pascal-case": "pascal-case",
  "string-to-snake-case": "snake-case",
  "string-to-title-case": "title-case",
  "slugify-string": "slugify",
  "truncate-text": "truncate",
  "truncate-sring": "truncate",
  "truncate-string": "truncate",
  "capitalize-string": "capitalize",
  "debounce-function": "debounce",
  "throttle-function": "throttle",
  "sleep-function": "sleep",
  "memoize-function": "memoize",
  "once-function": "once",
  "compose-functions": "compose",
  "curry-function": "curry",
  "deep-clone-object": "deep-clone",
  "merge-objects-deeply": "deep-merge",
  "omit-keys-from-object": "omit",
  "pick-keys-from-object": "pick",
  "get-nested-value": "get-path",
  "remove-duplicates": "unique",
  "shuffle-array": "shuffle",
  "convert-number-to-currency": "format-currency",
  "number-to-currency": "format-currency",
  "format-file-size": "format-bytes",
  "relative-time-formatter": "relative-time",
  "hex-to-rgb-color": "hex-to-rgb",
  "rgb-to-hex-color": "rgb-to-hex",
  "hsl-to-rgb-color": "hsl-to-rgb",
  "rgb-to-hsl-color": "rgb-to-hsl",
  "generate-uuid": "uuid",
  "random-string": "random-string",
  "check-if-object-is-empty": "is-empty-object",
  "convert-object-to-query-string": "to-query-string",
  "add-item-to-localstorage": "local-storage",
  "add-localstorage": "local-storage",
};

const EXT_BY_FENCE: Record<string, string> = {
  js: "js", javascript: "js", jsx: "jsx",
  ts: "ts", typescript: "ts", tsx: "tsx",
  py: "py", python: "py",
  c: "c", cpp: "cpp", "c++": "cpp",
  cs: "cs", csharp: "cs",
  java: "java",
  rs: "rs", rust: "rs",
  rb: "rb", ruby: "rb",
  hs: "hs", haskell: "hs",
  css: "css", scss: "scss", html: "html",
  sh: "sh", bash: "sh", shell: "sh",
  regex: "regex",
};

const EXT_BY_LANGUAGE_DIR: Record<string, string> = {
  bash: "sh", c: "c", cpp: "cpp", csharp: "cs", css: "css", haskell: "hs",
  html: "html", java: "java", javascript: "js", python: "py", regex: "regex",
  ruby: "rb", rust: "rs", scss: "scss", typescript: "ts",
};

/** Tags that carry no information (the language is already known). */
const NOISE_TAGS = new Set([
  "utility", "utilities", "javascript", "js", "python", "py", "java", "c",
  "cpp", "c++", "csharp", "rust", "ruby", "haskell", "css", "scss", "html",
  "typescript", "ts", "bash", "regex", "",
]);

type Snippet = {
  category: string;
  slug: string;
  title: string;
  description: string;
  tags: Set<string>;
  contributors: Set<string>;
  code: Record<string, string>;
  usage: Record<string, string[]>;
};

const registry = new Map<string, Snippet>();
const collisions: string[] = [];

const USAGE_RE = /^[ \t]*(?:\/\/|#|--|\/\*|<!--)[ \t]*usage\b.*$/im;

function splitUsage(code: string): { code: string; usage: string[] } {
  const match = USAGE_RE.exec(code);
  if (!match) return { code: code.trim(), usage: [] };
  const before = code.slice(0, match.index).trim();
  const after = code
    .slice(match.index + match[0].length)
    .replace(/^\s*\n/, "")
    .replace(/\s*(\*\/|-->)\s*$/, "")
    .trimEnd();
  return { code: before, usage: after ? after.split("\n") : [] };
}

function parseFrontmatter(md: string) {
  const m = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*\r?\n?([\s\S]*)$/.exec(md);
  if (!m) return { data: {} as Record<string, string>, body: md };
  const data: Record<string, string> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    // Some v1 files use capitalized keys ("Title:", "Author:").
    if (i > 0) data[line.slice(0, i).trim().toLowerCase()] = line.slice(i + 1).trim();
  }
  return { data, body: m[2] };
}

function parseFences(body: string) {
  const blocks: { fence: string; code: string }[] = [];
  const re = /```([a-zA-Z0-9+#-]*)[^\n]*\n([\s\S]*?)```/g;
  let m;
  while ((m = re.exec(body)) !== null) blocks.push({ fence: m[1].toLowerCase(), code: m[2] });
  return blocks;
}

function list(value: string | string[] | undefined): string[] {
  if (!value) return [];
  const arr = Array.isArray(value) ? value : value.split(",");
  return arr.map((s) => s.trim()).filter(Boolean);
}

function upsert(
  category: string,
  rawSlug: string,
  meta: { title: string; description: string; tags: string[]; contributors: string[] },
  blocks: { ext: string; code: string }[],
  source: string,
) {
  const slug = RENAME[rawSlug] ?? rawSlug;
  const key = `${category}/${slug}`;
  let s = registry.get(key);
  if (!s) {
    s = {
      category, slug, title: meta.title, description: meta.description,
      tags: new Set(), contributors: new Set(), code: {}, usage: {},
    };
    registry.set(key, s);
  }
  if (!s.description && meta.description) s.description = meta.description;
  if ((!s.title || s.title === slug) && meta.title) s.title = meta.title;
  meta.tags.map((t) => t.toLowerCase()).filter((t) => !NOISE_TAGS.has(t)).forEach((t) => s.tags.add(t));
  meta.contributors.forEach((c) => s.contributors.add(c));

  for (const { ext, code } of blocks) {
    const { code: impl, usage } = splitUsage(code);
    if (s.code[ext]) {
      if (s.code[ext].trim() === impl.trim()) continue;
      // Same language twice (e.g. two CSS blocks in one snippet) from the same source: concatenate.
      if (source.startsWith("v1:") && !s.code[ext].includes(impl)) {
        collisions.push(`${key}.${ext} (kept first, from ${source})`);
      }
      continue;
    }
    s.code[ext] = impl;
    if (usage.length) s.usage[ext] = usage;
  }
}

function walkV1(dir: string, rel: string[] = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkV1(full, [...rel, entry.name]);
    else if (entry.name.endsWith(".md") && rel.length >= 2) migrateV1File(full, rel);
  }
}

function migrateV1File(file: string, rel: string[]) {
  const [language, ...rest] = rel;
  const name = path.basename(file, ".md");
  const framework = FRAMEWORK_MAP[rest[0]];
  const v1Category = framework ? rest[1] : rest[0];

  if (v1Category === "basics" && name === "hello-world") return; // filler, lives on in git history

  const category = framework ?? CATEGORY_MAP[v1Category];
  if (!category) {
    console.warn(`⚠️  No category mapping for ${rel.join("/")}/${name}`);
    return;
  }

  const md = fs.readFileSync(file, "utf-8").replace(/\r\n/g, "\n");
  const { data, body } = parseFrontmatter(md);
  const defaultExt = EXT_BY_LANGUAGE_DIR[language];

  // Group fenced blocks by language; repeated blocks of the same language are joined.
  const grouped: Record<string, string[]> = {};
  for (const { fence, code } of parseFences(body)) {
    const ext = EXT_BY_FENCE[fence] ?? defaultExt;
    (grouped[ext] ??= []).push(code.trim());
  }
  const blocks = Object.entries(grouped).map(([ext, codes]) => ({ ext, code: codes.join("\n\n") }));
  if (!blocks.length) return;

  upsert(
    category,
    name,
    {
      title: data.title ?? name,
      description: data.description ?? "",
      tags: list(data.tags),
      contributors: [...list(data.author), ...list(data.contributors), ...list(data.contributor)],
    },
    blocks,
    `v1:${language}`,
  );
}

/** Current v2 snippets: snippets/<category>/<id>.json + <id>.md */
function migrateV2() {
  const v2Categories: Record<string, string> = {
    "string-manipulation": "string",
    "array-manipulation": "array",
    "number-formatting": "number",
    "data-handling": "storage",
  };
  for (const cat of Object.keys(v2Categories)) {
    const dir = path.join(OUT_DIR, cat);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".json"))) {
      const id = file.replace(/\.json$/, "");
      const meta = JSON.parse(fs.readFileSync(path.join(dir, file), "utf-8"));
      const md = fs.readFileSync(path.join(dir, `${id}.md`), "utf-8").replace(/\r\n/g, "\n");
      const blocks = parseFences(md).map(({ fence, code }) => ({ ext: EXT_BY_FENCE[fence] ?? fence, code }));
      // v2 entries were hand-curated: they win over v1 for the same language.
      const slug = RENAME[id] ?? id;
      const existing = registry.get(`${v2Categories[cat]}/${slug}`);
      if (existing) for (const b of blocks) { delete existing.code[b.ext]; delete existing.usage[b.ext]; }
      upsert(v2Categories[cat], id, meta, blocks, "v2");
    }
    fs.rmSync(dir, { recursive: true });
  }
}

function write() {
  for (const s of registry.values()) {
    const dir = path.join(OUT_DIR, s.category, s.slug);
    fs.mkdirSync(dir, { recursive: true });
    const meta = {
      title: s.title,
      description: s.description,
      tags: [...s.tags],
      contributors: [...s.contributors],
      ...(Object.keys(s.usage).length ? { usage: s.usage } : {}),
    };
    fs.writeFileSync(path.join(dir, "meta.json"), JSON.stringify(meta, null, 2) + "\n");
    for (const [ext, code] of Object.entries(s.code)) {
      fs.writeFileSync(path.join(dir, `${s.slug}.${ext}`), code.trimEnd() + "\n");
    }
  }
}

walkV1(V1_DIR);
migrateV2();
write();

const byCategory: Record<string, number> = {};
for (const s of registry.values()) byCategory[s.category] = (byCategory[s.category] ?? 0) + 1;
console.log(`✅ Migrated ${registry.size} snippets`);
console.table(byCategory);
if (collisions.length) console.log("Collisions:\n" + collisions.join("\n"));

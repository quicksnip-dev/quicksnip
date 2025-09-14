import fs from "fs";
import path from "path";

const SNIPPETS_DIR = path.join(process.cwd(), "snippets");
const OUTPUT_DIR = path.join(process.cwd(), "public", "data", "snippets");

/**
 * Extracts the code from markdown into a `{ language: code }` object.
 */
function parseMarkdown(mdContent: string) {
  const regex = /```([a-zA-Z0-9+#-]*)\s*([\s\S]*?)```/g;
  const snippets: { [lang: string]: string } = {};
  let match;

  while ((match = regex.exec(mdContent)) !== null) {
    const lang = match[1];
    const code = match[2].trim();
    snippets[lang] = code;
  }

  return snippets;
}

/**
 * Loads the `.json` and `.md` file of each snippet, and combines them into one object.
 */
function mergeSnippet(category: string, name: string) {
  const basePath = path.join(SNIPPETS_DIR, category, name);
  const mdFile = basePath + ".md";
  const jsonFile = basePath + ".json";

  if (!fs.existsSync(mdFile) || !fs.existsSync(jsonFile)) return null;

  const mdContent = fs.readFileSync(mdFile, "utf-8");
  const meta = JSON.parse(fs.readFileSync(jsonFile, "utf-8"));
  const snippets = parseMarkdown(mdContent);

  return {
    id: name,
    category,
    ...meta,
    snippets,
  };
}

/**
 * Reads all categories inside `/snippets` and merge their snippets.
 */
function scanSnippets(dir: string) {
  const items = [];

  for (const category of fs.readdirSync(dir)) {
    const categoryPath = path.join(dir, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    for (const file of fs.readdirSync(categoryPath)) {
      if (file.endsWith(".json")) {
        const name = file.replace(".json", "");
        const snippet = mergeSnippet(category, name);
        if (snippet) items.push(snippet);
      }
    }
  }

  return items;
}

/**
 * Generates JSON output for each snippet and a global all.json.
 */
function buildSnippets() {
  const allSnippets = scanSnippets(SNIPPETS_DIR);

  // write individual files
  for (const snippet of allSnippets) {
    const outDir = path.join(OUTPUT_DIR, snippet.category);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const outFile = path.join(outDir, `${snippet.id}.json`);
    fs.writeFileSync(outFile, JSON.stringify(snippet, null, 2));
  }

  // write all.json (metadata only)
  const allMeta = allSnippets.map(({ snippets, ...meta }) => meta);
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "all.json"),
    JSON.stringify(allMeta, null, 2)
  );

  console.log("✅ Snippets built:", allSnippets.length);
}

buildSnippets();

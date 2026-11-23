# Snippets

One folder per snippet: `snippets/<category>/<name>/`.

```txt
<name>/
├── meta.json        # required
├── <name>.ts        # TypeScript implementation
├── <name>.test.ts   # Vitest tests → ✓ verified (requires <name>.ts)
└── <name>.<ext>     # any other language: js, jsx, tsx, py, java, cs, cpp, c, rs, rb, hs, sh, css, scss, html, regex
```

## meta.json

```json
{
  "title": "Slugify",
  "description": "Converts a string into a URL-friendly slug, stripping accents and symbols.",
  "tags": ["url", "seo"],
  "contributors": ["github-username"],
  "usage": {
    "ts": ["slugify(\"Hello World!\"); // \"hello-world\""]
  },
  "dependencies": []
}
```

`npm run snippets:check` validates every folder. `npm run snippets` builds the website data, the shadcn registry (`public/r`) and `llms.txt`.

See [CONTRIBUTING.md](../CONTRIBUTING.md) for the full guidelines.

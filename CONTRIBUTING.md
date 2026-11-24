# Contributing to QuickSnip

Hey there! 👋 Thanks for taking the time to contribute. QuickSnip exists because of people like you.

The full guide lives at [quicksnip.app/guide/contributing/how-to-contribute](https://www.quicksnip.app/guide/contributing/how-to-contribute). This page is the short version.

## Ways to help

- **Verify a snippet**: add a TypeScript version and tests to an existing snippet. This is the best first PR.
- **Fix or improve a snippet**: bugs, edge cases, a new language.
- **Add a new snippet**: something developers rewrite again and again.
- **Improve the website or docs**: please open an issue first.

Before you build a new feature, open a [discussion](https://github.com/quicksnip-dev/quicksnip/discussions). PRs for undiscussed features may be closed.

## Snippet format

Each snippet is a folder: `snippets/<category>/<name>/`. The folder name is the snippet's permanent ID.

```txt
snippets/string/slugify/
├── meta.json         # title, description, tags, contributors, usage
├── slugify.ts        # TypeScript implementation (exported)
├── slugify.test.ts   # Vitest tests → makes the snippet "verified"
└── slugify.py        # other languages, one file each
```

```json
{
  "title": "Slugify",
  "description": "Converts a string into a URL-friendly slug, stripping accents and symbols.",
  "tags": ["url", "seo"],
  "contributors": ["your-github-username"],
  "usage": {
    "ts": ["slugify(\"Hello World!\"); // \"hello-world\""]
  }
}
```

Rules:

- Code files contain **only the implementation**. Put examples in `meta.json` → `usage`.
- Snippets are **self-contained** and **dependency-free** where possible.
- Tags are specific. Don't use the language name or words like `utility`.
- Add your GitHub username to the **end** of `contributors`. Never remove anyone.
- **Never rename** a snippet folder: its name is used in install URLs.

## Before you open a PR

```bash
npm install
npm run snippets:check   # validates all snippet folders
npm test                 # runs the tests
npm run dev              # preview at http://localhost:3000/snippets
```

## Is it a good snippet?

- Does the standard library already do this easily? Then it's probably not needed.
- Is it practical, and something people actually rewrite?
- Can someone understand it in a minute? If not, split it.

## Code of Conduct

Please be kind and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

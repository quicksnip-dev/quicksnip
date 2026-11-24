# Vision for QuickSnip

## What QuickSnip is

QuickSnip is the trusted source of small, reusable code that **humans copy and AI coding tools install**. It is open source, community-made, and MIT licensed.

## Why it exists (now more than ever)

When QuickSnip started in 2024, the problem was *finding* a snippet. AI has mostly solved that: any assistant can write `slugify` in a second.

The new problem is **trust and consistency**. AI writes a slightly different `debounce` every time, sometimes with a subtle bug, and repeats it across a codebase. QuickSnip's job is to be the one version that is:

- **correct**: typed and covered by tests that run on every change
- **owned**: copied into your project, with no dependency to manage
- **findable by machines**: stable names, a static JSON API, a shadcn registry and `llms.txt`

The goal is the same role [Lucide](https://lucide.dev) plays for icons: the default that people *and* AI reach for without thinking.

## Principles

- **Developer focused.** Only snippets people actually rewrite again and again.
- **Verified over voluminous.** One tested snippet beats ten untested ones.
- **Stable names.** A snippet's ID never changes once published.
- **Own the code.** No runtime package, no lock-in.
- **Lightweight and fast.** Static files, no accounts required.
- **Community first.** Every contributor stays credited, forever.

We do **NOT** aim to be a UI component library or general documentation.

## Roadmap

### v1.0 (Feb 2025) ✅

- [x] New snippet storage system
- [x] Search
- [x] Framework and library snippets
- [x] Sharing and basic SEO

### v2.0 (Oct 2025) ✅

- [x] Next.js rewrite with a Lucide-inspired design
- [x] Documentation site
- [x] One snippet, many languages

### v3.0 (in progress): verified snippets for humans and AI

- [x] Restore the full v1 collection with every contributor credited
- [x] Folder-per-snippet format with tests
- [x] Verified core of TypeScript utilities
- [x] shadcn registry (`npx shadcn add www.quicksnip.app/r/<name>.json`)
- [x] `llms.txt`, `llms-full.txt` and a static JSON API
- [x] Static, SEO-friendly snippet pages
- [ ] MCP server (search and install from Claude Code, Cursor, …)
- [ ] `npx quicksnip` CLI for every language
- [ ] Verify the remaining JavaScript and TypeScript snippets
- [ ] Tests for Python snippets
- [ ] VS Code extension

### Later

- [ ] React hooks and framework-specific collections (Next.js, Express, FastAPI)
- [ ] "Open in v0" and other AI-builder integrations
- [ ] Usage stats per snippet

This roadmap can change based on feedback. Share yours in [Discussions](https://github.com/quicksnip-dev/quicksnip/discussions).

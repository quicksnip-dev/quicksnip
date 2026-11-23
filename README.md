# QuickSnip

**Verified code snippets for humans and AI.** QuickSnip is an open-source, community-made collection of small, reusable utilities (`slugify`, `debounce`, `retry`, `deepMerge`…) in many languages. Copy them, install them with one command, or let your AI coding agent use them instead of writing code from scratch.

<a href="https://youtu.be/BhRi7fJzPgk" target="_blank">
  <img src="https://img.shields.io/static/v1?label=&message=Watch%20on%20YouTube&labelColor=FFFFFF&color=FF0000&style=for-the-badge&logo=youtube&logoColor=FF0000" alt="Watch on YouTube">
</a>

## Why

AI can write a `debounce` in a second, but it writes a slightly different one every time, sometimes with an edge-case bug. QuickSnip gives you and your AI **one trusted version**:

- ✅ **Verified**: typed TypeScript with unit tests that run in CI
- 📦 **One-command install** through the [shadcn registry](https://ui.shadcn.com/docs/registry): the code is copied into your project, no dependency added
- 🤖 **AI-readable** through [`llms.txt`](https://quicksnip.dev/llms.txt) and a static JSON API
- 🌍 **Many languages** for the same snippet: TypeScript, Python, Java, C++, Rust, Ruby, CSS and more

## Use it

```bash
# Install a snippet into your project's lib folder
npx shadcn@latest add https://quicksnip.dev/r/debounce.json
```

```ts
import { debounce } from "@/lib/debounce";
```

Or browse and copy on [quicksnip.dev/snippets](https://quicksnip.dev/snippets). For AI agents, see the [For AI agents guide](https://quicksnip.dev/guide/for-ai-agents).

## Repository layout

```txt
snippets/<category>/<name>/   one folder per snippet (meta.json + one file per language + tests)
scripts/build-snippets.ts     validates snippets and builds the JSON API, shadcn registry and llms.txt
src/                          the website (Next.js, Tailwind, Fumadocs)
content/docs/                 the guide
```

```bash
npm install
npm run dev             # build snippet data and start the site
npm test                # run tests of verified snippets
npm run snippets:check  # validate every snippet folder
```

## Contributing

Verifying an existing snippet (adding TypeScript and tests) is the most valuable contribution right now and a great first PR. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Third-party

- ⚡️ [**Raycast Extension**](https://www.raycast.com/anders_morille/quicksnip) by [@lille-morille](https://github.com/lille-morille)

Building something on QuickSnip? Please link back to this repository and [tell us about it](https://github.com/quicksnip-dev/quicksnip/discussions).

## History

QuickSnip started in October 2024. After the first YouTube video the community grew it from 7 to over 350 snippets in 15 languages within weeks. In v3, every one of those snippets was carried over with its authors credited, and the most useful ones were rewritten as verified TypeScript. See [VISION.md](VISION.md) for where it's going.

## License

[MIT](LICENSE) © 2024–present Technophile and QuickSnip contributors.

import {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

/**
 * Blog posts in `content/blog`. Write them in plain Markdown (no JSX): the build
 * also publishes each post as raw `.md` for AI tools, see scripts/build-snippets.ts.
 */
export const blogPosts = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    description: z.string(),
    /** ISO date, e.g. `2026-11-27`. */
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    author: z.string().default("Technophile"),
    tags: z.array(z.string()).default([]),
    /** Snippet ids (`category/slug`) shown as "Snippets in this post". */
    snippets: z.array(z.string()).default([]),
    /** Shown on the homepage (up to three, newest first). Pick posts people search for most. */
    featured: z.boolean().default(false),
  }),
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});

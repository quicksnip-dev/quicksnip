/**
 * Converts a string into a URL-friendly slug.
 * Strips accents, lowercases, and collapses anything non-alphanumeric into `separator`.
 */
export function slugify(input: string, separator = "-"): string {
  const sep = separator.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return input
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, separator)
    .replace(new RegExp(`^(?:${sep})+|(?:${sep})+$`, "g"), "");
}

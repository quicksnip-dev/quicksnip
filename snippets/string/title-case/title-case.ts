const MINOR = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "in", "of", "on", "or", "the", "to", "vs", "via"]);

/**
 * Converts a sentence to Title Case.
 * Minor words (a, of, the…) stay lowercase unless they are the first or last word.
 */
export function titleCase(input: string): string {
  const parts = input.toLowerCase().trim().split(/\s+/).filter(Boolean);
  return parts
    .map((word, i) =>
      i !== 0 && i !== parts.length - 1 && MINOR.has(word) ? word : word[0].toUpperCase() + word.slice(1),
    )
    .join(" ");
}

/**
 * Shortens text to at most `maxLength` characters (including the suffix).
 * With `wordBoundary`, it avoids cutting words in half.
 */
export function truncate(
  text: string,
  maxLength: number,
  { suffix = "…", wordBoundary = false }: { suffix?: string; wordBoundary?: boolean } = {},
): string {
  if (text.length <= maxLength) return text;
  let cut = text.slice(0, Math.max(0, maxLength - suffix.length));
  if (wordBoundary) {
    const lastSpace = cut.lastIndexOf(" ");
    if (lastSpace > 0) cut = cut.slice(0, lastSpace);
  }
  return cut.trimEnd() + suffix;
}

/** Splits any casing style (spaces, kebab, snake, camel, Pascal) into plain words. */
const words = (input: string): string[] =>
  input
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean);

/** Converts any string (spaces, kebab, camel, Pascal) to snake_case. */
export function snakeCase(input: string): string {
  return words(input)
    .map((w) => w.toLowerCase())
    .join("_");
}

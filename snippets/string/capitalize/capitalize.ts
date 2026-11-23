/** Uppercases the first character of a string and leaves the rest untouched. */
export function capitalize(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

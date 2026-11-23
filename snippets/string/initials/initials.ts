/** Returns up to `max` uppercase initials from a name, e.g. for avatar fallbacks. */
export function getInitials(name: string, max = 2): string {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, max)
    .map((part) => part[0].toUpperCase())
    .join("");
}

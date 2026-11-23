/**
 * Safely reads a nested value by path, e.g. `"user.addresses[0].city"`.
 * Returns `fallback` when any segment is missing.
 */
export function getPath<T = unknown>(obj: unknown, path: string | readonly PropertyKey[], fallback?: T): T {
  const segments = typeof path === "string" ? path.replace(/\[(\w+)\]/g, ".$1").split(".").filter(Boolean) : path;
  let current: unknown = obj;
  for (const segment of segments) {
    if (current === null || current === undefined) return fallback as T;
    current = (current as Record<PropertyKey, unknown>)[segment];
  }
  return (current === undefined ? fallback : current) as T;
}

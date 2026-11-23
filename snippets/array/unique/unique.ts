/**
 * Removes duplicates while keeping the first occurrence and the original order.
 * Pass `by` to deduplicate objects by a key or computed value.
 */
export function unique<T>(items: readonly T[], by?: keyof T | ((item: T) => unknown)): T[] {
  if (!by) return [...new Set(items)];
  const getKey = typeof by === "function" ? by : (item: T) => item[by];
  const seen = new Set<unknown>();
  return items.filter((item) => {
    const key = getKey(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

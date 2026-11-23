/**
 * Caches the results of `fn` by its arguments.
 * By default the key is the JSON of the arguments; pass `key` for custom keys
 * (for example when arguments are objects that cannot be serialized).
 */
export function memoize<A extends unknown[], R>(
  fn: (...args: A) => R,
  key: (...args: A) => unknown = (...args) => JSON.stringify(args),
): ((...args: A) => R) & { cache: Map<unknown, R> } {
  const cache = new Map<unknown, R>();
  const memoized = (...args: A): R => {
    const k = key(...args);
    if (cache.has(k)) return cache.get(k)!;
    const result = fn(...args);
    cache.set(k, result);
    return result;
  };
  memoized.cache = cache;
  return memoized;
}

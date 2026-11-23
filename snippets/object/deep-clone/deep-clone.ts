/**
 * Deep-clones plain objects, arrays, Dates, Maps, Sets and RegExps, including circular references.
 * Prefer the built-in `structuredClone` when available; use this when you also
 * need to clone class instances' own properties or run in older runtimes.
 */
export function deepClone<T>(value: T, seen = new WeakMap<object, unknown>()): T {
  if (value === null || typeof value !== "object") return value;
  if (seen.has(value)) return seen.get(value) as T;

  if (value instanceof Date) return new Date(value.getTime()) as T;
  if (value instanceof RegExp) return new RegExp(value.source, value.flags) as T;

  if (value instanceof Map) {
    const out = new Map();
    seen.set(value, out);
    value.forEach((v, k) => out.set(deepClone(k, seen), deepClone(v, seen)));
    return out as T;
  }
  if (value instanceof Set) {
    const out = new Set();
    seen.set(value, out);
    value.forEach((v) => out.add(deepClone(v, seen)));
    return out as T;
  }

  const out = (Array.isArray(value) ? [] : Object.create(Object.getPrototypeOf(value))) as Record<
    PropertyKey,
    unknown
  >;
  seen.set(value, out);
  for (const key of Reflect.ownKeys(value)) {
    out[key] = deepClone((value as Record<PropertyKey, unknown>)[key], seen);
  }
  return out as T;
}

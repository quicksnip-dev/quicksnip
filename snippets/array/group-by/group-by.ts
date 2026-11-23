type KeysMatching<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];

/**
 * Groups items into an object keyed by `key` (a property name or a function).
 * Like `Object.groupBy`, but works in every runtime and keeps strong types.
 */
export function groupBy<T, K extends PropertyKey>(items: readonly T[], key: (item: T) => K): Record<K, T[]>;
export function groupBy<T, P extends KeysMatching<T, PropertyKey>>(
  items: readonly T[],
  key: P,
): Record<T[P] & PropertyKey, T[]>;
export function groupBy<T>(items: readonly T[], key: PropertyKey | ((item: T) => PropertyKey)) {
  const getKey = typeof key === "function" ? key : (item: T) => item[key as keyof T] as PropertyKey;
  const result: Record<PropertyKey, T[]> = {};
  for (const item of items) {
    const k = getKey(item);
    (result[k] ??= []).push(item);
  }
  return result;
}

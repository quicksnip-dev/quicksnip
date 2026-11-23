type PlainObject = Record<string, unknown>;

export type DeepPartial<T> = T extends readonly unknown[]
  ? T
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

const isPlainObject = (value: unknown): value is PlainObject =>
  typeof value === "object" &&
  value !== null &&
  (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);

const merge = (target: PlainObject, source: PlainObject): PlainObject => {
  const result: PlainObject = { ...target };
  for (const [key, value] of Object.entries(source)) {
    if (key === "__proto__" || key === "constructor" || key === "prototype") continue;
    const current = result[key];
    result[key] = isPlainObject(current) && isPlainObject(value) ? merge(current, value) : value;
  }
  return result;
};

/**
 * Deeply merges `sources` into a copy of `base`, from left to right. Inputs are not mutated.
 * Arrays and other non-plain values from later sources replace earlier ones.
 * Ignores `__proto__`, `constructor` and `prototype` keys to prevent prototype pollution.
 */
export function deepMerge<T extends object>(base: T, ...sources: DeepPartial<T>[]): T {
  let result = merge({}, base as PlainObject);
  for (const source of sources) {
    if (isPlainObject(source)) result = merge(result, source);
  }
  return result as T;
}

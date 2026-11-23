import { expect, it } from "vitest";
import { deepMerge } from "./deep-merge";

it("merges nested objects", () => {
  const defaults = { theme: { color: "blue", size: "md" }, debug: false };
  expect(deepMerge(defaults, { theme: { color: "red" } })).toEqual({
    theme: { color: "red", size: "md" },
    debug: false,
  });
});

it("applies sources from left to right", () => {
  expect(deepMerge({ a: 1, b: 1 }, { a: 2 }, { a: 3, b: 3 })).toEqual({ a: 3, b: 3 });
});

it("replaces arrays instead of merging them into objects", () => {
  expect(deepMerge({ tags: ["a", "b"] }, { tags: ["c"] })).toEqual({ tags: ["c"] });
});

it("does not mutate the inputs", () => {
  const base = { nested: { x: 1, y: 0 } };
  const merged = deepMerge(base, { nested: { y: 2 } });
  expect(base).toEqual({ nested: { x: 1, y: 0 } });
  expect(merged).toEqual({ nested: { x: 1, y: 2 } });
  expect(merged.nested).not.toBe(base.nested);
});

it("blocks prototype pollution", () => {
  deepMerge({}, JSON.parse('{"__proto__": {"polluted": true}}'));
  expect(({} as Record<string, unknown>).polluted).toBeUndefined();
});

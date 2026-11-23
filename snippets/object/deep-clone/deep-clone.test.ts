import { expect, it } from "vitest";
import { deepClone } from "./deep-clone";

it("clones nested structures without sharing references", () => {
  const original = { a: 1, b: { c: [1, 2, { d: 3 }] } };
  const copy = deepClone(original);
  expect(copy).toEqual(original);
  expect(copy.b).not.toBe(original.b);
  expect(copy.b.c[2]).not.toBe(original.b.c[2]);
});

it("clones Dates, Maps and Sets", () => {
  const original = { when: new Date(0), map: new Map([["k", { v: 1 }]]), set: new Set([1, 2]) };
  const copy = deepClone(original);
  expect(copy.when).toEqual(original.when);
  expect(copy.when).not.toBe(original.when);
  expect(copy.map.get("k")).toEqual({ v: 1 });
  expect(copy.map.get("k")).not.toBe(original.map.get("k"));
  expect([...copy.set]).toEqual([1, 2]);
});

it("handles circular references", () => {
  const original: { self?: unknown } = {};
  original.self = original;
  const copy = deepClone(original);
  expect(copy.self).toBe(copy);
});

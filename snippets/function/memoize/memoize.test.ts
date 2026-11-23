import { expect, it, vi } from "vitest";
import { memoize } from "./memoize";

it("computes once per distinct argument list", () => {
  const square = vi.fn((n: number) => n * n);
  const m = memoize(square);
  expect(m(4)).toBe(16);
  expect(m(4)).toBe(16);
  expect(m(5)).toBe(25);
  expect(square).toHaveBeenCalledTimes(2);
});

it("caches falsy results too", () => {
  const fn = vi.fn(() => undefined);
  const m = memoize(fn);
  m();
  m();
  expect(fn).toHaveBeenCalledTimes(1);
});

it("supports a custom key", () => {
  const fn = vi.fn((user: { id: number }) => user.id * 2);
  const m = memoize(fn, (user) => user.id);
  m({ id: 1 });
  m({ id: 1 });
  expect(fn).toHaveBeenCalledTimes(1);
  expect(m.cache.size).toBe(1);
});

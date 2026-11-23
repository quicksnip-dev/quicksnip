import { expect, it, vi } from "vitest";
import { once } from "./once";

it("runs only once and returns the first result", () => {
  const fn = vi.fn((n: number) => n + 1);
  const init = once(fn);
  expect(init(1)).toBe(2);
  expect(init(10)).toBe(2);
  expect(fn).toHaveBeenCalledTimes(1);
});

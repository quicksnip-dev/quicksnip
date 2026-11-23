import { expect, it } from "vitest";
import { chunk } from "./chunk";

it("splits into groups", () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  expect(chunk([], 3)).toEqual([]);
});

it("rejects invalid sizes", () => {
  expect(() => chunk([1], 0)).toThrow(RangeError);
});

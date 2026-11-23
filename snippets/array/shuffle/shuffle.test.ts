import { expect, it } from "vitest";
import { shuffle } from "./shuffle";

it("keeps the same elements and does not mutate", () => {
  const input = [1, 2, 3, 4, 5];
  const output = shuffle(input);
  expect(output).not.toBe(input);
  expect([...output].sort()).toEqual(input);
  expect(input).toEqual([1, 2, 3, 4, 5]);
});

it("is deterministic with a seeded random", () => {
  const zero = () => 0;
  expect(shuffle([1, 2, 3, 4], zero)).toEqual([2, 3, 4, 1]);
});

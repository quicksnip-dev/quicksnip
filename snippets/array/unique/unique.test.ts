import { expect, it } from "vitest";
import { unique } from "./unique";

it("removes primitive duplicates in order", () => {
  expect(unique([3, 1, 3, 2, 1])).toEqual([3, 1, 2]);
});

it("deduplicates by key", () => {
  const users = [
    { id: 1, name: "Ada" },
    { id: 2, name: "Alan" },
    { id: 1, name: "Ada (copy)" },
  ];
  expect(unique(users, "id").map((u) => u.name)).toEqual(["Ada", "Alan"]);
});

it("deduplicates by a function", () => {
  expect(unique(["a", "A", "b"], (s) => s.toLowerCase())).toEqual(["a", "b"]);
});

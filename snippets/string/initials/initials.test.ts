import { expect, it } from "vitest";
import { getInitials } from "./initials";

it.each([
  ["John Doe", "JD"],
  ["  ada   lovelace ", "AL"],
  ["Mary Jane Watson", "MJ"],
  ["Cher", "C"],
  ["", ""],
])("getInitials(%j) → %j", (name, expected) => {
  expect(getInitials(name)).toBe(expected);
});

import { expect, it } from "vitest";
import { titleCase } from "./title-case";

it.each([
  ["hello world", "Hello World"],
  ["the lord of the rings", "The Lord of the Rings"],
  ["what are you looking at", "What Are You Looking At"],
  ["  SHOUTING   text ", "Shouting Text"],
  ["", ""],
])("titleCase(%j) → %j", (input, expected) => {
  expect(titleCase(input)).toBe(expected);
});

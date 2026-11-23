import { expect, it } from "vitest";
import { camelCase } from "./camel-case";

it.each([
  ["hello world", "helloWorld"],
  ["Hello-World", "helloWorld"],
  ["hello_world_again", "helloWorldAgain"],
  ["HelloWorld", "helloWorld"],
  ["XMLHttpRequest", "xmlHttpRequest"],
  ["  spaced   out  ", "spacedOut"],
  ["", ""],
])("camelCase(%j) → %j", (input, expected) => {
  expect(camelCase(input)).toBe(expected);
});

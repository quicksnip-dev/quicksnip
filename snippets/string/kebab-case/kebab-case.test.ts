import { expect, it } from "vitest";
import { kebabCase } from "./kebab-case";

it.each([
  ["Hello World", "hello-world"],
  ["helloWorld", "hello-world"],
  ["HelloWorld", "hello-world"],
  ["hello_world", "hello-world"],
  ["XMLHttpRequest", "xml-http-request"],
  ["Crème Brûlée", "creme-brulee"],
])("kebabCase(%j) → %j", (input, expected) => {
  expect(kebabCase(input)).toBe(expected);
});

import { expect, it } from "vitest";
import { pascalCase } from "./pascal-case";

it.each([
  ["hello world", "HelloWorld"],
  ["hello-world", "HelloWorld"],
  ["helloWorld", "HelloWorld"],
  ["user_id", "UserId"],
  ["", ""],
])("pascalCase(%j) → %j", (input, expected) => {
  expect(pascalCase(input)).toBe(expected);
});

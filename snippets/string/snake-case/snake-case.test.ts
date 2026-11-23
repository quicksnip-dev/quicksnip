import { expect, it } from "vitest";
import { snakeCase } from "./snake-case";

it.each([
  ["Hello World", "hello_world"],
  ["helloWorld", "hello_world"],
  ["hello-world", "hello_world"],
  ["userID2Name", "user_id2_name"],
])("snakeCase(%j) → %j", (input, expected) => {
  expect(snakeCase(input)).toBe(expected);
});

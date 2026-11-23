import { expect, it } from "vitest";
import { capitalize } from "./capitalize";

it("capitalizes the first letter only", () => {
  expect(capitalize("hello World")).toBe("Hello World");
  expect(capitalize("")).toBe("");
  expect(capitalize("éclair")).toBe("Éclair");
});

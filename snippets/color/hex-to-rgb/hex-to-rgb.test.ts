import { expect, it } from "vitest";
import { hexToRgb } from "./hex-to-rgb";

it("parses long and short hex", () => {
  expect(hexToRgb("#00b5b8")).toEqual({ r: 0, g: 181, b: 184 });
  expect(hexToRgb("fff")).toEqual({ r: 255, g: 255, b: 255 });
});

it("parses alpha", () => {
  expect(hexToRgb("#ff000080")).toEqual({ r: 255, g: 0, b: 0, a: 0.502 });
});

it("returns null for invalid input", () => {
  expect(hexToRgb("#zzzzzz")).toBeNull();
  expect(hexToRgb("#12345")).toBeNull();
});

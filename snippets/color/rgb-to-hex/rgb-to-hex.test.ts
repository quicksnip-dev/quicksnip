import { expect, it } from "vitest";
import { rgbToHex } from "./rgb-to-hex";

it("converts channels to hex", () => {
  expect(rgbToHex(0, 181, 184)).toBe("#00b5b8");
  expect(rgbToHex(255, 255, 255)).toBe("#ffffff");
});

it("clamps and rounds out-of-range values", () => {
  expect(rgbToHex(300, -10, 127.6)).toBe("#ff0080");
});

it("supports alpha", () => {
  expect(rgbToHex(255, 0, 0, 0.5)).toBe("#ff000080");
});

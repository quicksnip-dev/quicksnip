import { expect, it } from "vitest";
import { formatBytes } from "./format-bytes";

it.each([
  [0, "0 B"],
  [512, "512 B"],
  [1536, "1.5 KB"],
  [1048576, "1 MB"],
  [-2048, "-2 KB"],
])("formatBytes(%d) → %s", (input, expected) => {
  expect(formatBytes(input)).toBe(expected);
});

it("supports SI units and precision", () => {
  expect(formatBytes(1500, { si: true })).toBe("1.5 kB");
  expect(formatBytes(1234567, { decimals: 2 })).toBe("1.18 MB");
});

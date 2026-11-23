import { expect, it } from "vitest";
import { truncate } from "./truncate";

it("keeps text that already fits", () => {
  expect(truncate("Hello", 5)).toBe("Hello");
});
it("never exceeds maxLength", () => {
  const out = truncate("The quick brown fox", 10);
  expect(out).toBe("The quick…");
  expect(out.length).toBeLessThanOrEqual(10);
});
it("respects word boundaries", () => {
  expect(truncate("The quick brown fox", 12, { wordBoundary: true })).toBe("The quick…");
});
it("supports a custom suffix", () => {
  expect(truncate("Hello world", 8, { suffix: "..." })).toBe("Hello...");
});

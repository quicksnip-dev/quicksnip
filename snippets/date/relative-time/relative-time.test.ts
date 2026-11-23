import { expect, it } from "vitest";
import { relativeTime } from "./relative-time";

const now = new Date("2026-01-15T12:00:00Z").getTime();
const opts = { now, locale: "en" };

it("formats past and future times", () => {
  expect(relativeTime(now - 3 * 60 * 60 * 1000, opts)).toBe("3 hours ago");
  expect(relativeTime(now + 2 * 24 * 60 * 60 * 1000, opts)).toBe("in 2 days");
  expect(relativeTime(now - 24 * 60 * 60 * 1000, opts)).toBe("yesterday");
});

it("handles 'now'", () => {
  expect(relativeTime(now, opts)).toBe("now");
});

it("accepts ISO strings", () => {
  expect(relativeTime("2025-01-15T12:00:00Z", opts)).toBe("last year");
});

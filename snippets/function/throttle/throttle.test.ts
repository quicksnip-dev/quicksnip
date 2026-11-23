import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { throttle } from "./throttle";

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(1_000_000);
});
afterEach(() => vi.useRealTimers());

it("runs the first call immediately", () => {
  const fn = vi.fn();
  throttle(fn, 100)("a");
  expect(fn).toHaveBeenCalledWith("a");
});

it("runs the trailing call with the latest arguments", () => {
  const fn = vi.fn();
  const t = throttle(fn, 100);
  t(1);
  t(2);
  t(3);
  expect(fn).toHaveBeenCalledTimes(1);
  vi.advanceTimersByTime(100);
  expect(fn).toHaveBeenCalledTimes(2);
  expect(fn).toHaveBeenLastCalledWith(3);
});

it("can be cancelled", () => {
  const fn = vi.fn();
  const t = throttle(fn, 100);
  t(1);
  t(2);
  t.cancel();
  vi.advanceTimersByTime(200);
  expect(fn).toHaveBeenCalledTimes(1);
});

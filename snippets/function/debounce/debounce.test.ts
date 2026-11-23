import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { debounce } from "./debounce";

beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

it("calls once with the latest arguments after the wait", () => {
  const fn = vi.fn();
  const d = debounce(fn, 100);
  d("a");
  d("b");
  vi.advanceTimersByTime(99);
  expect(fn).not.toHaveBeenCalled();
  vi.advanceTimersByTime(1);
  expect(fn).toHaveBeenCalledTimes(1);
  expect(fn).toHaveBeenCalledWith("b");
});

it("can be cancelled", () => {
  const fn = vi.fn();
  const d = debounce(fn, 100);
  d();
  d.cancel();
  vi.advanceTimersByTime(200);
  expect(fn).not.toHaveBeenCalled();
});

it("can be flushed", () => {
  const fn = vi.fn();
  const d = debounce(fn, 100);
  d(1);
  d.flush();
  expect(fn).toHaveBeenCalledWith(1);
  vi.advanceTimersByTime(200);
  expect(fn).toHaveBeenCalledTimes(1);
});

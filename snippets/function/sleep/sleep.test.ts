import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { sleep } from "./sleep";

beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

it("resolves after the given time", async () => {
  const done = vi.fn();
  sleep(500).then(done);
  await vi.advanceTimersByTimeAsync(499);
  expect(done).not.toHaveBeenCalled();
  await vi.advanceTimersByTimeAsync(1);
  expect(done).toHaveBeenCalled();
});

it("rejects when aborted", async () => {
  const controller = new AbortController();
  const promise = sleep(1000, controller.signal);
  controller.abort(new Error("stop"));
  await expect(promise).rejects.toThrow("stop");
});

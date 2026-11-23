import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { retry } from "./retry";

beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

it("returns as soon as an attempt succeeds", async () => {
  const fn = vi
    .fn<(attempt: number) => Promise<string>>()
    .mockRejectedValueOnce(new Error("fail 1"))
    .mockResolvedValueOnce("ok");
  const promise = retry(fn, { delay: 100 });
  await vi.runAllTimersAsync();
  await expect(promise).resolves.toBe("ok");
  expect(fn).toHaveBeenCalledTimes(2);
  expect(fn).toHaveBeenLastCalledWith(2);
});

it("throws the last error after all attempts", async () => {
  const fn = vi.fn(async () => {
    throw new Error("down");
  });
  const promise = retry(fn, { attempts: 3 });
  const assertion = expect(promise).rejects.toThrow("down");
  await vi.runAllTimersAsync();
  await assertion;
  expect(fn).toHaveBeenCalledTimes(3);
});

it("stops early when shouldRetry returns false", async () => {
  const fn = vi.fn(async () => {
    throw new Error("404");
  });
  await expect(retry(fn, { shouldRetry: () => false })).rejects.toThrow("404");
  expect(fn).toHaveBeenCalledTimes(1);
});

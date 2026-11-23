import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { storage } from "./local-storage";

beforeEach(() => {
  const store = new Map<string, string>();
  vi.stubGlobal("localStorage", {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => void store.set(k, v),
    removeItem: (k: string) => void store.delete(k),
  });
});
afterEach(() => vi.unstubAllGlobals());

it("round-trips JSON values", () => {
  expect(storage.set("user", { id: 1, tags: ["a"] })).toBe(true);
  expect(storage.get("user", null)).toEqual({ id: 1, tags: ["a"] });
  expect(storage.has("user")).toBe(true);
  storage.remove("user");
  expect(storage.has("user")).toBe(false);
});

it("returns the fallback for missing or corrupt values", () => {
  expect(storage.get("missing", 42)).toBe(42);
  localStorage.setItem("bad", "{not json");
  expect(storage.get("bad", "fallback")).toBe("fallback");
});

it("does not throw when storage is unavailable", () => {
  vi.stubGlobal("localStorage", undefined);
  expect(storage.get("x", 1)).toBe(1);
  expect(storage.set("x", 1)).toBe(false);
});

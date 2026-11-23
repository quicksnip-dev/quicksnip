import { expect, it } from "vitest";
import { safeJsonParse } from "./safe-json-parse";

it("returns the parsed value", () => {
  expect(safeJsonParse<{ a: number }>('{"a":1}')).toEqual({ ok: true, value: { a: 1 } });
});

it("returns an error instead of throwing", () => {
  const result = safeJsonParse("{oops");
  expect(result.ok).toBe(false);
  if (!result.ok) expect(result.error).toBeInstanceOf(SyntaxError);
});

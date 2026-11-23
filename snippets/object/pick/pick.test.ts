import { expect, it } from "vitest";
import { pick } from "./pick";

it("keeps only the requested keys", () => {
  const user = { id: 1, name: "Ada", password: "secret" };
  expect(pick(user, ["id", "name"])).toEqual({ id: 1, name: "Ada" });
});

it("skips keys that are not present", () => {
  const obj: { a: number; b?: number } = { a: 1 };
  expect(pick(obj, ["a", "b"])).toEqual({ a: 1 });
});

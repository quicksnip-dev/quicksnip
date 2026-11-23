import { expect, it } from "vitest";
import { omit } from "./omit";

it("removes the given keys without mutating the input", () => {
  const user = { id: 1, name: "Ada", password: "secret" };
  expect(omit(user, ["password"])).toEqual({ id: 1, name: "Ada" });
  expect(user.password).toBe("secret");
});

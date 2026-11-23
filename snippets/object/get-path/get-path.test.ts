import { expect, it } from "vitest";
import { getPath } from "./get-path";

const data = { user: { name: "Ada", addresses: [{ city: "London" }], active: false } };

it("reads dot and bracket paths", () => {
  expect(getPath(data, "user.name")).toBe("Ada");
  expect(getPath(data, "user.addresses[0].city")).toBe("London");
  expect(getPath(data, ["user", "addresses", 0, "city"])).toBe("London");
});

it("returns the fallback for missing paths", () => {
  expect(getPath(data, "user.phone.number", "n/a")).toBe("n/a");
  expect(getPath(null, "a.b")).toBeUndefined();
});

it("keeps falsy values that exist", () => {
  expect(getPath(data, "user.active", true)).toBe(false);
});

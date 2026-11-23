import { expect, it } from "vitest";
import { groupBy } from "./group-by";

const people = [
  { name: "Ada", role: "admin" },
  { name: "Alan", role: "user" },
  { name: "Grace", role: "admin" },
];

it("groups by property", () => {
  const grouped = groupBy(people, "role");
  expect(grouped.admin.map((p) => p.name)).toEqual(["Ada", "Grace"]);
  expect(grouped.user).toHaveLength(1);
});

it("groups by function", () => {
  expect(groupBy([1, 2, 3, 4], (n) => (n % 2 ? "odd" : "even"))).toEqual({ odd: [1, 3], even: [2, 4] });
});

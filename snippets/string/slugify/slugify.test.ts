import { describe, expect, it } from "vitest";
import { slugify } from "./slugify";

describe("slugify", () => {
  it("lowercases and hyphenates", () => {
    expect(slugify("Hello, World! This is a Test.")).toBe("hello-world-this-is-a-test");
  });
  it("strips accents", () => {
    expect(slugify("Crème Brûlée à la mode")).toBe("creme-brulee-a-la-mode");
  });
  it("trims leading and trailing separators", () => {
    expect(slugify("  --Hello--  ")).toBe("hello");
  });
  it("supports a custom separator", () => {
    expect(slugify("Hello World", "_")).toBe("hello_world");
  });
  it("returns an empty string for symbols only", () => {
    expect(slugify("!@#$")).toBe("");
  });
});

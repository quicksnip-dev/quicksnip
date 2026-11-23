import { expect, it } from "vitest";
import { escapeHtml } from "./escape-html";

it("escapes markup and quotes", () => {
  expect(escapeHtml(`<a href="x" title='y'>Tom & Jerry</a>`)).toBe(
    "&lt;a href=&quot;x&quot; title=&#39;y&#39;&gt;Tom &amp; Jerry&lt;/a&gt;",
  );
});

it("leaves safe text untouched", () => {
  expect(escapeHtml("Hello world")).toBe("Hello world");
});

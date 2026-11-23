import { expect, it } from "vitest";
import { formatCurrency } from "./format-currency";

it("formats with currency and locale", () => {
  expect(formatCurrency(1234.5, "USD", "en-US")).toBe("$1,234.50");
  expect(formatCurrency(1234.5, "JPY", "ja-JP")).toBe("￥1,235");
});

it("accepts extra Intl options", () => {
  expect(formatCurrency(1500, "USD", "en-US", { notation: "compact" })).toBe("$1.5K");
});

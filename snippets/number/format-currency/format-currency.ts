/**
 * Formats a number as currency using the platform's Intl API.
 * Defaults to the runtime locale; pass `locale` for deterministic server output.
 */
export function formatCurrency(
  amount: number,
  currency = "USD",
  locale?: string,
  options: Intl.NumberFormatOptions = {},
): string {
  return new Intl.NumberFormat(locale, { style: "currency", currency, ...options }).format(amount);
}

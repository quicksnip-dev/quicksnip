const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 365 * 24 * 60 * 60 * 1000],
  ["month", 30 * 24 * 60 * 60 * 1000],
  ["week", 7 * 24 * 60 * 60 * 1000],
  ["day", 24 * 60 * 60 * 1000],
  ["hour", 60 * 60 * 1000],
  ["minute", 60 * 1000],
  ["second", 1000],
];

/**
 * Formats a date relative to now, e.g. "3 hours ago" or "in 2 days".
 * Localized through `Intl.RelativeTimeFormat`.
 */
export function relativeTime(
  date: Date | number | string,
  { now = Date.now(), locale }: { now?: Date | number; locale?: string } = {},
): string {
  const diff = new Date(date).getTime() - new Date(now).getTime();
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  for (const [unit, ms] of UNITS) {
    if (Math.abs(diff) >= ms || unit === "second") {
      return rtf.format(Math.round(diff / ms), unit);
    }
  }
  return rtf.format(0, "second");
}

import { localeConfigs, type Locale } from "./locales";

/**
 * Formats a date as "<full month name> <year>" for display (article-page meta line,
 * 05-design-spec.md §11 s05, e.g. "September 2026" / "setembro de 2026"), using `Intl` (no
 * dependency, §11 of 04-stack-profile.md). `timeZone: "UTC"` keeps the result stable regardless
 * of the machine's timezone, since content dates are date-only values with no time-of-day
 * meaning (matches formatDate.ts).
 */
export function formatMonthYear(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(localeConfigs[locale].hreflang, {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(date);
}

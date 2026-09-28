import { localeConfigs, type Locale } from "./locales";

/**
 * Formats a date as "<year> / <2-digit month>" (compact row date, 05-design-spec.md §11 s01/s04,
 * e.g. "2026 / 09"), using `Intl.DateTimeFormat.formatToParts` (no dependency, §11 of
 * 04-stack-profile.md) so the digits themselves are locale-correct while the "YYYY / MM" shape
 * stays fixed for every locale, matching the prototype in both `en` and `pt-br`. `timeZone:
 * "UTC"` keeps the result stable regardless of the machine's timezone (matches formatDate.ts).
 */
export function formatYearMonth(date: Date, locale: Locale): string {
  const parts = new Intl.DateTimeFormat(localeConfigs[locale].hreflang, {
    year: "numeric",
    month: "2-digit",
    timeZone: "UTC",
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value ?? "";
  const month = parts.find((part) => part.type === "month")?.value ?? "";
  return `${year} / ${month}`;
}

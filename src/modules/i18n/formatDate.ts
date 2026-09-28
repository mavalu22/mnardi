import { localeConfigs, type Locale } from "./locales";

/**
 * Formats a date for display in `locale`'s long form, using `Intl` (no dependency, §11 of
 * 04-stack-profile.md). `timeZone: "UTC"` keeps the result stable regardless of the machine's
 * timezone, since content dates are date-only values with no time-of-day meaning.
 */
export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(localeConfigs[locale].hreflang, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

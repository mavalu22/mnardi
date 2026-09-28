// Formats a content date as the `YYYY-MM-DD` value a `<time datetime>` attribute needs (AC2).
// Content dates are date-only values coerced by zod at UTC midnight (content module,
// collections.ts), so reading the UTC calendar fields keeps this stable regardless of the
// machine's timezone (mirrors `formatDate`'s `timeZone: "UTC"` choice, i18n module).
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

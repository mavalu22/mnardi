import { defaultLocale, localeConfigs, locales } from "./locales";
import { localizePath, stripLocalePrefix } from "./localizePath";

/** The production site URL (matches `site` in `astro.config.ts`, 03-platform-architecture.md §8). */
const siteUrl = "https://mnardi.com";

export interface Alternate {
  /** BCP 47 tag, or the literal `"x-default"` entry. */
  hreflang: string;
  href: string;
}

/**
 * Builds the `hreflang` alternates for a page path: one per locale, plus `x-default` pointing at
 * the English URL (03-platform-architecture.md §8). `path` may already carry a locale prefix.
 */
export function alternates(path: string): Alternate[] {
  const localeNeutralPath = stripLocalePrefix(path);
  const perLocale = locales.map((locale) => ({
    hreflang: localeConfigs[locale].hreflang,
    href: `${siteUrl}${localizePath(localeNeutralPath, locale)}`,
  }));
  return [
    ...perLocale,
    {
      hreflang: "x-default",
      href: `${siteUrl}${localizePath(localeNeutralPath, defaultLocale)}`,
    },
  ];
}

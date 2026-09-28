import { type Locale, localeConfigs, locales } from "./locales";

/** The URL path prefix for a locale, or `undefined` for one with no prefix (the default locale). */
function pathPrefixFor(locale: Locale): string | undefined {
  const config = localeConfigs[locale];
  return "path" in config ? config.path : undefined;
}

/** Removes a leading locale path prefix, if `path` has one, returning the locale-neutral path. */
function stripLocalePrefix(path: string): string {
  for (const candidate of locales) {
    const prefix = pathPrefixFor(candidate);
    if (!prefix) continue;
    if (path === `/${prefix}` || path.startsWith(`/${prefix}/`)) {
      const rest = path.slice(prefix.length + 1);
      return rest === "" ? "/" : rest;
    }
  }
  return path;
}

/**
 * Rewrites `path` (which may already carry a locale prefix) to the equivalent path under
 * `locale`: no prefix for the default locale, `/pt-br/...` for `pt-br` (ADR-003, ADR-007). Used
 * by the language switcher to link to the same page in the other locale.
 */
export function localizePath(path: string, locale: Locale): string {
  const localeNeutralPath = stripLocalePrefix(path);
  const prefix = pathPrefixFor(locale);
  return prefix ? `/${prefix}${localeNeutralPath}` : localeNeutralPath;
}

export { stripLocalePrefix };

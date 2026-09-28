// Locale list and default locale for the whole site (03-platform-architecture.md §4, §8).
// Plain TypeScript, no `astro:*` import, so `astro.config.ts` can build its `i18n` block from it
// (04-stack-profile.md §10) without pulling the Astro runtime into this module.
//
// `as const` keeps every path and hreflang tag a literal string type (not widened to `string`),
// which `astro.config.ts` needs so `defineConfig`'s `const TLocales` type parameter can infer the
// exact locale tuple from these values.

export const localeConfigs = {
  en: { hreflang: "en" },
  "pt-br": { path: "pt-br", hreflang: "pt-BR" },
} as const;

export type Locale = keyof typeof localeConfigs;

export const locales: Locale[] = Object.keys(localeConfigs) as Locale[];

export const defaultLocale: Locale = "en";

/**
 * Locales that fall back to another locale when a page or key is missing (ADR-003, ADR-007).
 * `astro.config.ts` builds its `i18n.fallback` block from this map, so this is the only place
 * that states the fact.
 */
export const fallbackLocales: Partial<Record<Locale, Locale>> = {
  "pt-br": "en",
};

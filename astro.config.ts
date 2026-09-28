import { defineConfig, envField } from "astro/config";
// 04-stack-profile.md §10: astro.config.ts builds its `i18n` block straight from the plain locale
// list in locales.ts (not the module's index.ts), since it runs outside the module boundary the
// import-boundary rule protects (03 §4).
// eslint-disable-next-line no-restricted-imports
import {
  localeConfigs,
  fallbackLocales,
  type Locale,
} from "./src/modules/i18n/locales";
// eslint-disable-next-line no-restricted-imports
import { resumeCheckIntegration } from "./src/modules/site/resumeCheckIntegration";

// FACTORY_SLOT: process-environment integer, unset/empty/invalid means slot 0 (04-stack-profile.md §14).
const slot = Number.parseInt(process.env.FACTORY_SLOT ?? "", 10) || 0;

// Astro's `i18n.fallback` keys/values are routing identifiers (a locale's `path` when it has one,
// otherwise its `hreflang`, since the default locale isn't prefixed). Built once here so
// `fallbackLocales` (locales.ts) stays the single source of truth for the fallback map itself.
const localeCode: Record<Locale, string> = {
  en: localeConfigs.en.hreflang,
  "pt-br": localeConfigs["pt-br"].path,
};

export default defineConfig({
  output: "static",
  site: "https://mnardi.com",
  server: { port: 4321 + 10 * slot },
  // Built from src/modules/i18n/locales.ts: only `i18n` owns the locale list and default locale
  // (03-platform-architecture.md §4). The array is written out (rather than mapped at runtime) so
  // TypeScript can infer the exact locale tuple `defineConfig`'s `const TLocales` parameter needs.
  // Astro validates `defaultLocale`/`fallback` against each locale's `path` (checked against
  // Astro 7.3.5's `validateI18nFallback`/`validateI18nDefaultLocale`), so `codes` here repeats the
  // path; the `hreflang` tag from `localeConfigs` (used for `<html lang>` and our own `hreflang`
  // alternates in `alternates.ts`) is a separate, product-facing concern from this routing detail.
  i18n: {
    defaultLocale: localeConfigs.en.hreflang,
    locales: [
      localeConfigs.en.hreflang,
      {
        path: localeConfigs["pt-br"].path,
        codes: [localeConfigs["pt-br"].path],
      },
    ],
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "rewrite",
    },
    fallback: Object.fromEntries(
      Object.entries(fallbackLocales).map(([from, to]) => [
        localeCode[from as Locale],
        localeCode[to as Locale],
      ]),
    ),
  },
  integrations: [resumeCheckIntegration()],
  env: {
    schema: {
      PUBLIC_UMAMI_WEBSITE_ID: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
  },
  vite: {
    server: {
      watch: {
        ignored: ["**/factory/**"],
      },
    },
  },
});

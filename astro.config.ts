import { existsSync } from "node:fs";
import { defineConfig, envField } from "astro/config";
import sitemap from "@astrojs/sitemap";
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

// 03-platform-architecture.md §8: the sitemap leaves out pt-BR fallback pages (their canonical is
// the English page). A pt-BR project/post URL is a fallback exactly when its slug has no
// `pt-br.md` file (ADR-007); checked directly on disk (not through the `content` module, which
// only route files may import) since this runs outside `astro:content` at sitemap-generation time.
const PT_BR_ENTRY_URL = /^\/pt-br\/(projects|blog)\/([^/]+)\/$/;
const collectionDir: Record<string, string> = {
  projects: "projects",
  blog: "posts",
};

function isFallbackSitemapUrl(pageUrl: string): boolean {
  const path = new URL(pageUrl).pathname;
  const match = PT_BR_ENTRY_URL.exec(path);
  if (!match) return false;
  const [, section, slug] = match;
  return !existsSync(
    `./src/content/${collectionDir[section]}/${slug}/pt-br.md`,
  );
}

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
  integrations: [
    resumeCheckIntegration(),
    // 03-platform-architecture.md §8: absolute URLs from `site`, `en`/`pt-BR` alternates built by
    // matching the locale-neutral path across the two locale prefixes, pt-BR fallback pages
    // filtered out.
    sitemap({
      filter: (page) => !isFallbackSitemapUrl(page),
      i18n: {
        defaultLocale: localeConfigs.en.hreflang,
        locales: {
          [localeConfigs.en.hreflang]: localeConfigs.en.hreflang,
          [localeConfigs["pt-br"].path]: localeConfigs["pt-br"].hreflang,
        },
      },
    }),
  ],
  // WCAG-AA-checked Shiki theme pair for Markdown code blocks (github-light/github-dark fail
  // contrast; the `-default` variants pass), used by Astro's own Markdown pipeline for both
  // project and post bodies (T-009, T-010, AC3).
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light-default",
        dark: "github-dark-default",
      },
    },
  },
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

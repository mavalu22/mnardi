// Pure rule: per-locale entry resolution with English fallback (ADR-003, ADR-007,
// 03-platform-architecture.md §5). No `astro:*` import (04-stack-profile.md §1, §12).

import type { Locale } from "../i18n";

export interface LocaleResolution<T> {
  value: T;
  /** True when `locale` is `pt-br` and no pt-BR version exists, so `value` is the English one. */
  isFallback: boolean;
}

/**
 * `en` always resolves to `en`, never a fallback. `pt-br` resolves to `ptBr` when given, otherwise
 * to `en` with `isFallback: true`.
 */
export function resolveLocaleData<T>(
  locale: Locale,
  en: T,
  ptBr: T | undefined,
): LocaleResolution<T> {
  if (locale === "pt-br" && ptBr !== undefined) {
    return { value: ptBr, isFallback: false };
  }
  return { value: en, isFallback: locale === "pt-br" };
}

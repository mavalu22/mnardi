import type { Locale } from "./locales";
import en from "./dictionaries/en";
import ptBr from "./dictionaries/pt-br";

/** Every valid dictionary key, derived from the English dictionary (the complete one). */
export type DictionaryKey = keyof typeof en;

const dictionaries: Record<Locale, Partial<Record<DictionaryKey, string>>> = {
  en,
  "pt-br": ptBr,
};

/**
 * Look up a UI string for a locale, falling back to English when the locale's dictionary
 * doesn't have the key (ADR-003, ADR-007). `key` is typed against the English dictionary, so a
 * key missing from `en` is a type error at every call site (03-platform-architecture.md §5).
 */
export function t(locale: Locale, key: DictionaryKey): string {
  return dictionaries[locale][key] ?? en[key];
}

// Public interface of the `i18n` module (03-platform-architecture.md §4). Other modules import
// only from this file, never from a file inside `src/modules/i18n/` directly.

export { type Locale, defaultLocale, locales } from "./locales";
export { t, type DictionaryKey } from "./t";
export { localizePath } from "./localizePath";
export { alternates, type Alternate } from "./alternates";
export { formatDate } from "./formatDate";

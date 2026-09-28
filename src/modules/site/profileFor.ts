// Per-locale text resolution for SiteProfile (03-platform-architecture.md §5, §4). Pure function,
// no `astro:*` import: for each text field, returns the requested locale's value when defined,
// otherwise the `en` value (ADR-003, ADR-007).
import type { Locale } from "../i18n";
import type { ProfileText, SiteProfile } from "./siteProfile";

export function profileFor(profile: SiteProfile, locale: Locale): ProfileText {
  const en = profile.texts.en;
  if (locale === "en") {
    return en;
  }

  const overrides = profile.texts[locale];
  return {
    headline: overrides?.headline ?? en.headline,
    bio: overrides?.bio ?? en.bio,
    photoAlt: overrides?.photoAlt ?? en.photoAlt,
    resume: overrides?.resume ?? en.resume,
  };
}

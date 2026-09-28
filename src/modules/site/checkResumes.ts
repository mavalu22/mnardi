// Build-time resume check (03-platform-architecture.md §5, §4 of 04-stack-profile.md). Pure
// function, no `astro:*` import, so it stays testable and free of the Astro runtime; the
// integration in resumeCheckIntegration.ts is the only caller.
import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Locale } from "../i18n";
import type { SiteProfile } from "./siteProfile";

/**
 * Checks that every resume path declared in `profile.texts`, for each locale that declares one,
 * exists under `publicDir`. Throws naming the locale and the path on the first missing file.
 */
export function checkResumes(profile: SiteProfile, publicDir: string): void {
  const entries = Object.entries(profile.texts) as [
    Locale,
    { resume?: string } | undefined,
  ][];

  for (const [locale, text] of entries) {
    const resume = text?.resume;
    if (!resume) {
      continue;
    }

    const filePath = join(publicDir, resume);
    if (!existsSync(filePath)) {
      throw new Error(
        `SiteProfile resume check failed: locale "${locale}" declares resume path "${resume}", but no file exists at "${filePath}".`,
      );
    }
  }
}

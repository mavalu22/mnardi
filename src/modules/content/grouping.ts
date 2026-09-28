// Pure rule: group loaded entries by slug and locale file name. No `astro:*` import
// (04-stack-profile.md §1, §12).

import type { LoadedEntry } from "./types";

export interface LocaleGroup<Data> {
  slug: string;
  en?: LoadedEntry<Data>;
  ptBr?: LoadedEntry<Data>;
}

function splitId(id: string): { slug: string; localeFile: string } {
  const separatorIndex = id.lastIndexOf("/");
  return {
    slug: id.slice(0, separatorIndex),
    localeFile: id.slice(separatorIndex + 1),
  };
}

/** Groups entries with id `<slug>/<locale-file-name>` (the glob loader's default id) by slug. */
export function groupByLocale<Data>(
  entries: readonly LoadedEntry<Data>[],
): LocaleGroup<Data>[] {
  const groups = new Map<string, LocaleGroup<Data>>();

  for (const entry of entries) {
    const { slug, localeFile } = splitId(entry.id);
    const group = groups.get(slug) ?? { slug };

    if (localeFile === "en") {
      group.en = entry;
    } else if (localeFile === "pt-br") {
      group.ptBr = entry;
    }

    groups.set(slug, group);
  }

  return [...groups.values()];
}

// Pure rule: listing order for projects and posts (03-platform-architecture.md §5). No `astro:*`
// import (04-stack-profile.md §1, §12).

export interface ProjectSortKey {
  slug: string;
  order?: number;
  /** Always the English title, so both locales list projects in the same order (03 §5). */
  englishTitle: string;
}

/** Ascending by `order`; projects without `order` come after all ordered ones, then by English title. */
export function sortProjectKeys(
  items: readonly ProjectSortKey[],
): ProjectSortKey[] {
  return [...items].sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
      if (a.order !== b.order) return a.order - b.order;
      return a.englishTitle.localeCompare(b.englishTitle);
    }
    if (a.order !== undefined) return -1;
    if (b.order !== undefined) return 1;
    return a.englishTitle.localeCompare(b.englishTitle);
  });
}

export interface PostSortKey {
  slug: string;
  date: Date;
}

/** Newest `date` first. */
export function sortPostKeys(items: readonly PostSortKey[]): PostSortKey[] {
  return [...items].sort((a, b) => b.date.getTime() - a.date.getTime());
}

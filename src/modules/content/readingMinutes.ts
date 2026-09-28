// Pure rule: reading time for a Markdown body (03-platform-architecture.md §5, "Derived values").
// No `astro:*` import (04-stack-profile.md §1, §12).

/**
 * Word count divided by 200, rounded up, with a minimum of 1. `body` is the raw Markdown source
 * (headings, code fences and punctuation count as words like any other whitespace-separated text;
 * this is an estimate, not a precise reading-speed model).
 */
export function readingMinutes(body: string): number {
  const words = body
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  return Math.max(1, Math.ceil(words.length / 200));
}

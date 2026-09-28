// Pure rule: cross-locale consistency check for non-translatable fields (03-platform-architecture.md
// §5, ADR-007). No `astro:*` import (04-stack-profile.md §1, §12).

function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();
  if (Array.isArray(a) && Array.isArray(b)) {
    return (
      a.length === b.length &&
      a.every((item, index) => deepEqual(item, b[index]))
    );
  }
  if (
    a !== null &&
    b !== null &&
    typeof a === "object" &&
    typeof b === "object"
  ) {
    const aRecord = a as Record<string, unknown>;
    const bRecord = b as Record<string, unknown>;
    const aKeys = Object.keys(aRecord);
    const bKeys = Object.keys(bRecord);
    return (
      aKeys.length === bKeys.length &&
      aKeys.every((key) => deepEqual(aRecord[key], bRecord[key]))
    );
  }
  return false;
}

/**
 * Compares `fields` between the English and pt-BR data of the same entry. A field present in one
 * side only, or with a different value (arrays compared item by item, dates by value), is
 * reported. Returns the mismatched field names, in the order given.
 */
export function findMismatchedFields<Data>(
  fields: readonly (keyof Data)[],
  en: Data,
  ptBr: Data,
): string[] {
  return fields
    .filter((field) => !deepEqual(en[field], ptBr[field]))
    .map((field) => String(field));
}

/**
 * Throws, naming the slug and the mismatched fields, when `en` and `ptBr` disagree on any of
 * `fields`. A build-time invariant (03 §5): called for every entry that has a `pt-br.md`.
 */
export function assertConsistentLocales<Data>(
  kind: "project" | "post",
  slug: string,
  fields: readonly (keyof Data)[],
  en: Data,
  ptBr: Data,
): void {
  const mismatched = findMismatchedFields(fields, en, ptBr);
  if (mismatched.length > 0) {
    throw new Error(
      `${kind} "${slug}": pt-br.md must match en.md for: ${mismatched.join(", ")}`,
    );
  }
}

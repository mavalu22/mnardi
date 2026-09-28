// Domain types for the `content` module's public interface (03-platform-architecture.md §4, §5).
// Plain TypeScript, no `astro:*` import: only `collections.ts` and `repository.ts` need the Astro
// content APIs (04-stack-profile.md §1, §12).

import type { ImageMetadata } from "astro";
import type { Locale } from "../i18n";

export interface ProjectLinks {
  repo?: string;
  demo?: string;
}

export interface Project {
  slug: string;
  locale: Locale;
  /** True when this locale has no translation and the English version is shown instead (ADR-007). */
  isFallback: boolean;
  title: string;
  description: string;
  techStack: string[];
  links: ProjectLinks;
  order?: number;
  date?: Date;
  cover?: ImageMetadata;
  coverAlt?: string;
  body: string;
}

export interface Post {
  slug: string;
  locale: Locale;
  isFallback: boolean;
  title: string;
  date: Date;
  summary: string;
  updated?: Date;
  body: string;
}

/**
 * Minimal shape of a loaded content entry, declared locally so the pure rule files
 * (`grouping.ts`, `consistency.ts`, `resolve.ts`, `sort.ts`) need no `astro:content` import; a
 * `CollectionEntry<...>` from `getCollection` structurally satisfies this interface.
 */
export interface LoadedEntry<Data> {
  /** `<slug>/<locale-file-name>`, from the glob loader's default id (collections.ts). */
  id: string;
  data: Data;
  body?: string;
}

/** A slug's entries after the en.md-required and cross-locale consistency checks have passed. */
export interface ValidatedGroup<Data> {
  slug: string;
  en: LoadedEntry<Data>;
  ptBr?: LoadedEntry<Data>;
}

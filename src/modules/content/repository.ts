// Orchestrates the pure rules (grouping, consistency, resolution, sorting) over the collections
// defined in collections.ts. Imports `astro:content` (04-stack-profile.md §1, §12: only `content`
// calls `getCollection`); this is the module's only caller of it besides collections.ts.

import { getCollection, type CollectionEntry } from "astro:content";
import { locales, type Locale } from "../i18n";
import { assertConsistentLocales } from "./consistency";
import { groupByLocale } from "./grouping";
import { resolveLocaleData } from "./resolve";
import {
  sortPostKeys,
  sortProjectKeys,
  type PostSortKey,
  type ProjectSortKey,
} from "./sort";
import type { Post, Project, ValidatedGroup } from "./types";

type ProjectData = CollectionEntry<"projects">["data"];
type PostData = CollectionEntry<"posts">["data"];

const projectNonTranslatableFields: readonly (keyof ProjectData)[] = [
  "techStack",
  "links",
  "order",
  "date",
];
const postNonTranslatableFields: readonly (keyof PostData)[] = [
  "date",
  "updated",
];

function findGroup<Data>(
  groups: readonly ValidatedGroup<Data>[],
  slug: string,
): ValidatedGroup<Data> {
  const group = groups.find((candidate) => candidate.slug === slug);
  if (!group) {
    throw new Error(
      `content: no group found for slug "${slug}" (internal error)`,
    );
  }
  return group;
}

async function loadProjectGroups(): Promise<ValidatedGroup<ProjectData>[]> {
  const entries = await getCollection("projects");
  const groups = groupByLocale<ProjectData>(entries);

  return groups.map((group) => {
    const { slug, en, ptBr } = group;
    if (!en) {
      throw new Error(
        `project "${slug}": en.md is required (a pt-br.md alone is not enough)`,
      );
    }
    if (ptBr) {
      assertConsistentLocales(
        "project",
        slug,
        projectNonTranslatableFields,
        en.data,
        ptBr.data,
      );
    }
    return { slug, en, ptBr };
  });
}

async function loadPostGroups(): Promise<ValidatedGroup<PostData>[]> {
  const entries = await getCollection("posts");
  const groups = groupByLocale<PostData>(entries);

  return groups.map((group) => {
    const { slug, en, ptBr } = group;
    if (!en) {
      throw new Error(
        `post "${slug}": en.md is required (a pt-br.md alone is not enough)`,
      );
    }
    if (ptBr) {
      assertConsistentLocales(
        "post",
        slug,
        postNonTranslatableFields,
        en.data,
        ptBr.data,
      );
    }
    return { slug, en, ptBr };
  });
}

function toProject(
  group: ValidatedGroup<ProjectData>,
  locale: Locale,
): Project {
  const { value: entry, isFallback } = resolveLocaleData(
    locale,
    group.en,
    group.ptBr,
  );
  const { data, body } = entry;
  return {
    slug: group.slug,
    locale,
    isFallback,
    title: data.title,
    description: data.description,
    techStack: data.techStack,
    links: data.links,
    order: data.order,
    date: data.date,
    cover: data.cover,
    coverAlt: data.coverAlt,
    body: body ?? "",
  };
}

function toPost(group: ValidatedGroup<PostData>, locale: Locale): Post {
  const { value: entry, isFallback } = resolveLocaleData(
    locale,
    group.en,
    group.ptBr,
  );
  const { data, body } = entry;
  return {
    slug: group.slug,
    locale,
    isFallback,
    title: data.title,
    date: data.date,
    summary: data.summary,
    updated: data.updated,
    body: body ?? "",
  };
}

/** Every project, ordered by `order` ascending then by English title (03 §5). */
export async function getProjects(locale: Locale): Promise<Project[]> {
  const groups = await loadProjectGroups();
  const sortKeys: ProjectSortKey[] = groups.map((group) => ({
    slug: group.slug,
    order: group.en.data.order,
    englishTitle: group.en.data.title,
  }));
  return sortProjectKeys(sortKeys).map(({ slug }) =>
    toProject(findGroup(groups, slug), locale),
  );
}

/** The project for `slug` in `locale`, or `undefined` when no such slug exists. */
export async function getProject(
  slug: string,
  locale: Locale,
): Promise<Project | undefined> {
  const groups = await loadProjectGroups();
  const group = groups.find((candidate) => candidate.slug === slug);
  return group ? toProject(group, locale) : undefined;
}

/** Every post, newest `date` first (03 §5). */
export async function getPosts(locale: Locale): Promise<Post[]> {
  const groups = await loadPostGroups();
  const sortKeys: PostSortKey[] = groups.map((group) => ({
    slug: group.slug,
    date: group.en.data.date,
  }));
  return sortPostKeys(sortKeys).map(({ slug }) =>
    toPost(findGroup(groups, slug), locale),
  );
}

/** The post for `slug` in `locale`, or `undefined` when no such slug exists. */
export async function getPost(
  slug: string,
  locale: Locale,
): Promise<Post | undefined> {
  const groups = await loadPostGroups();
  const group = groups.find((candidate) => candidate.slug === slug);
  return group ? toPost(group, locale) : undefined;
}

/**
 * One path per slug and locale, for every project. Loading the groups runs the en.md-required and
 * cross-locale consistency checks for every entry (03 §5, §4).
 */
export async function projectPaths(): Promise<
  { slug: string; locale: Locale }[]
> {
  const groups = await loadProjectGroups();
  return groups.flatMap((group) =>
    locales.map((locale) => ({ slug: group.slug, locale })),
  );
}

/** One path per slug and locale, for every post. Same checks as `projectPaths()`. */
export async function postPaths(): Promise<{ slug: string; locale: Locale }[]> {
  const groups = await loadPostGroups();
  return groups.flatMap((group) =>
    locales.map((locale) => ({ slug: group.slug, locale })),
  );
}

// Collection definitions and schemas for Project and Post (03-platform-architecture.md §4, §5;
// ADR-002, ADR-007). This is one of the few files in `content` allowed to import `astro:content`
// (04-stack-profile.md §1, §12: only `content` calls `getCollection`/`getEntry`/`defineCollection`).

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// One folder per entry, one file per locale: src/content/projects/<slug>/en.md (required) and an
// optional pt-br.md (ADR-007). The glob loader's default id, `<slug>/<locale-file-name>`, is what
// `grouping.ts` parses.
const projects = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().min(1, "title is required"),
        description: z
          .string()
          .min(1, "description is required")
          .max(200, "description must be at most 200 characters"),
        techStack: z
          .array(z.string().min(1))
          .min(1, "techStack requires at least one item"),
        links: z
          .object({
            repo: z.string().url("links.repo must be a valid URL").optional(),
            demo: z.string().url("links.demo must be a valid URL").optional(),
          })
          .refine(
            (links) => links.repo !== undefined || links.demo !== undefined,
            {
              message: "links requires at least one of repo or demo",
            },
          ),
        order: z
          .number()
          .int()
          .positive("order must be a positive integer")
          .optional(),
        date: z.coerce.date().optional(),
        cover: image().optional(),
        coverAlt: z.string().min(1).optional(),
      })
      .refine(
        (entry) => entry.cover === undefined || entry.coverAlt !== undefined,
        {
          message: "coverAlt is required when cover is set",
          path: ["coverAlt"],
        },
      ),
});

const posts = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string().min(1, "title is required"),
    date: z.coerce.date({ error: "date is required and must be a valid date" }),
    summary: z.string().min(1, "summary is required"),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { projects, posts };

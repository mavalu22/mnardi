# mnardi

Matheus Nardi's personal engineering hub: a static, bilingual (English / Portuguese-BR) website built with [Astro](https://astro.build), showcasing projects and technical writing (the "Writing" section, at the `/blog/` URL), with page-view analytics via [Umami](https://umami.is). No backend, no database, no accounts.

Production: <https://mnardi.com>

## Prerequisites

- **Node.js 24.x** (pinned in `.nvmrc` and `engines.node`). Use nvm, fnm, or your system's Node 24.
- **pnpm 10.34.5**, enabled through Corepack (ships with Node 24):

  ```sh
  corepack enable
  ```

  Corepack reads the `packageManager` field in `package.json` and installs the exact pnpm version automatically the first time you run `pnpm`.

## Install

```sh
pnpm install
```

This also runs the `prepare` script, which installs the git pre-commit hook (Husky + lint-staged).

## Development

```sh
pnpm dev
```

Starts the Astro dev server at <http://localhost:4321> with hot reload. Analytics are always off locally (`PUBLIC_UMAMI_WEBSITE_ID` is unset).

## Checks before merging

Run these locally before every merge (there is no CI pipeline):

```sh
pnpm lint          # ESLint, zero warnings allowed
pnpm format:check  # Prettier check
pnpm build         # astro check (type-check + content schemas) + astro build
```

Other useful commands:

| Command                         | Purpose                                                  |
| ------------------------------- | -------------------------------------------------------- |
| `pnpm format`                   | Apply Prettier formatting                                |
| `pnpm typecheck`                | `astro check` only                                       |
| `pnpm preview`                  | Serve the built `dist/` locally (run `pnpm build` first) |
| `pnpm audit --audit-level high` | Dependency vulnerability audit                           |

There are no automated tests (see `factory/input/07-testing.md`); QA is manual, in a browser.

## Content

Content lives as Markdown files in `src/content/`, one folder per entry. Each entry needs an `en.md` file; a `pt-br.md` file is optional (missing translations fall back to English automatically, both for the listing and the detail page).

### Adding a project

1. Create a folder: `src/content/projects/<slug>/` (kebab-case slug; becomes the URL, e.g. `/projects/<slug>/`).
2. Add `en.md` with this frontmatter:

   ```yaml
   ---
   title: "Project Title"
   description: "Short summary, max 200 characters, shown in the listing."
   techStack:
     - "TypeScript"
     - "Astro"
   links: # optional; when present, needs at least one of repo/demo
     repo: "https://github.com/..."
     demo: "https://..."
   category: "Product" # optional, 1-40 characters, shown in the detail page eyebrow
   topics: # optional, 1-4 non-empty strings, drives the Projects topic filters
     - "Product"
     - "Backend"
   meta: # optional, 1-4 label/value items, shown as the detail page's meta boxes
     - label: "Role"
       value: "Product · Backend"
     - label: "Stack"
       value: "TypeScript · Astro"
   order: 1 # optional; sets listing position (ascending); ties/unset sort by English title
   date: 2024-01-01 # optional, display only
   cover: "./cover.png" # optional; coverAlt is required if cover is set
   coverAlt: "Description of the cover image"
   ---
   Full description in Markdown.
   ```

3. Optionally add `pt-br.md` with the same frontmatter, translating `title`, `description`, `category`, `meta`'s labels and values, `coverAlt` and the body. **`techStack`, `links`, `topics`, `order` and `date` must be identical to `en.md`** — the build fails if they differ or are missing on one side. `links` is entirely optional: a project can ship with no `links` field at all, and the owner can add `repo`/`demo` later as a plain Markdown edit.
4. Put any images referenced by the entry (e.g. `cover.png`) in the same folder.

### Adding a post

1. Create a folder: `src/content/posts/<slug>/`.
2. Add `en.md` with this frontmatter:

   ```yaml
   ---
   title: "Post Title"
   date: 2024-01-01 # required; publication date, sorts newest first
   summary: "Shown in the listing and as the meta description."
   updated: 2024-02-01 # optional; shown when present
   topics: # optional, 1-4 non-empty strings, drives the Writing topic filters
     - "Engineering"
   ---
   Full post body in Markdown (Shiki code highlighting is available).
   ```

3. Optionally add `pt-br.md` with the same frontmatter, translating `title`, `summary` and the body. **`date`, `updated` and `topics` must be identical to `en.md`.**

A build fails (locally and on Vercel) if a required field is missing, if `en.md` is missing, or if a non-translatable field doesn't match between `en.md` and `pt-br.md`.

## Configuration

The only environment variable is `PUBLIC_UMAMI_WEBSITE_ID` (public, optional), documented in `.env.example`. It is set only in Vercel's Production environment; leave it empty locally. See `astro.config.ts` for the `astro:env` schema.

## Deployment and rollbacks

The project is hosted on Vercel (Hobby plan), connected to this GitHub repository (`mavalu22/mnardi`):

- **Production:** every push (or merge) to `main` triggers a build (`pnpm build`, output directory `dist`) and, on success, an atomic deploy to `https://mnardi.com`. A failed build never replaces the live site, and Vercel emails the owner about the failure.
- **Preview:** every push to any other branch gets its own `*.vercel.app` preview URL, with analytics disabled and `X-Robots-Tag: noindex`, so a change can be checked before merging.
- **Rollback:** in the Vercel dashboard, open the project's **Deployments** tab and click **Promote to Production** on any earlier successful deployment. Alternatively, revert the offending commit on `main` and push; that triggers a normal new deployment.

`vercel.json` (security headers, including the Content Security Policy) is generated at build time from the built HTML and committed as part of that build's output — don't hand-edit it; change the source in the security-headers build integration and run `pnpm build` instead.

The one-time setup of the Vercel project, the `mnardi.com` custom domain and the Umami website needs the owner's own Vercel, registrar and Umami accounts, so it isn't part of this repository.

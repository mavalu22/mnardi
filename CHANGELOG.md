# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [CP-6] - 2026-10-01

### Fixed

- On Portuguese project pages that show the "not translated yet" notice, the notice no longer touches the header; it now has the same top spacing as the Portuguese Writing pages.

## [CP-5] - 2026-10-01

### Fixed

- On project detail pages, the label above the title (for example "PROJECT 01 / DEVELOPER TOOLS") no longer touches the header; the page now has the same top spacing as the Writing pages.

## [CP-4] - 2026-09-29

### Changed

- The Home page hero's "View projects" and "Read writing" buttons are now direct links to LinkedIn and Resume, alongside the existing GitHub link; the LinkedIn and Resume links were removed from the footer accordingly.
- Shortened the Projects page's intro text to "A selection of things I've built."
- In the Portuguese version of the site, "Projects" and "Writing" are now fully translated to "Projetos" and "Anotações."

### Fixed

- The Projects page's top spacing now matches the Writing page.

## [CP-3] - 2026-09-29

### Added

- A custom browser tab and bookmark icon (favicon), generated from the owner's own "MN" logo, replacing the earlier placeholder icon.

## [CP-2] - 2026-09-29

Engineering-hub redesign, live at [mnardi.com](https://mnardi.com).

### Added

- Full visual redesign in a dark and gold editorial theme: row-based layouts for projects and posts replace the earlier card grids, across Home, the Projects section and the Writing section, in both languages.
- The site navigation item and page titles previously labeled "Blog" are now labeled "Writing" (a presentation-only rename; the URL still starts with `/blog/` and existing links keep working).
- A mobile menu (native HTML `popover`) and topic filters on the Projects and Writing listings (CSS `:has()`), both built with no JavaScript; the site's strict Content Security Policy is unchanged, with no new script added.
- Three real portfolio projects — Goalden, ADA Management and Runara — with stack, role and context details, replacing the earlier placeholder project.
- The first real blog post, "Building better software with AI agents," replacing the earlier placeholder post.
- New optional fields for future projects and posts: a `category` label, up to 4 `topics` tags (used by the new topic filters), and, for projects, a `meta` box (role, stack and similar short facts) shown on the project page; a project's repo/demo links are now optional and can be added later.

### Fixed

- Accessibility contrast issues found during a full site-wide accessibility and performance audit: eyebrow labels, row numbers and dates, and meta-box labels now meet WCAG AA contrast in both light and dark theme.
- A code-block theming bug where fenced code blocks in an article could show light, hard-to-read colors instead of the intended dark panel.
- A navigation labeling issue where the site's two navigation menus (header and footer) were not distinguishable to assistive-technology users.
- The audit found zero serious or critical accessibility violations (axe-core) and a perfect Lighthouse score (100/100/100/100) on every page type; one minor, non-blocking finding remains open for a future fix (a landmark on the Home page isn't at the top level for assistive-technology navigation).

## [CP-1] - 2026-09-29

First public release of the site, live at [mnardi.com](https://mnardi.com).

### Added

- Home page with profile photo, headline, bio, contact links (email, LinkedIn, GitHub), a link to download the resume, and cards highlighting the top project and the latest blog post.
- Projects listing page, in the owner's chosen order, with an empty state for when there are no projects yet.
- Blog listing page, newest post first, with an empty state for when there are no posts yet.
- Project and post detail pages, with the full body rendered from Markdown, including syntax-highlighted code blocks that follow the site's light/dark theme.
- Bilingual site (English and Portuguese-BR): every page is available in both languages, with a language switcher in the header and automatic fallback to English for content not yet translated.
- Light/dark theme toggle with a "follow system setting" option; the chosen theme is remembered across visits and applied with no flash of the wrong theme on load.
- Page-view analytics via Umami, active only in production.
- Sitemap, `robots.txt` and a bilingual "page not found" (404) page.
- Production deployment on Vercel at the custom domain `mnardi.com`, with automatic preview deployments for other branches and automatic rollback safety (a failing build never replaces the live site).
- Security headers on every response, including a strict, hash-based Content Security Policy, `X-Content-Type-Options`, `Referrer-Policy` and a `Permissions-Policy` that disables camera, microphone and geolocation.

### Fixed

- Analytics page views were being silently blocked by the Content Security Policy in production; the policy now allows Umami's actual data-collection endpoint.

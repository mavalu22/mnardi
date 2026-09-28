# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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

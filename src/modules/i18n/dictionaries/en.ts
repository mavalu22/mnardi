// English UI dictionary: the complete set of fixed UI strings (05-design-spec.md §8, §11, §13).
// This dictionary is the source of truth for every dictionary key; `pt-br.ts` may omit a key to
// fall back to the value here (ADR-003, ADR-007).

const en = {
  "nav.skipLink": "Skip to main content",
  "nav.ariaLabel": "Primary",
  "nav.projects": "Projects",
  "nav.blog": "Blog",

  "languageSwitcher.ariaLabel": "Language",
  "languageSwitcher.en": "EN",
  "languageSwitcher.ptBr": "PT-BR",

  "themeToggle.system": "Theme: following system setting",
  "themeToggle.light": "Theme: light",
  "themeToggle.dark": "Theme: dark",

  "home.highlightsHeading": "Featured highlights",
  "home.viewProject": "View project",
  "home.viewResume": "View resume",
  "a11y.opensInNewTab": "(opens in a new tab)",

  "projects.pageTitle": "Projects — Matheus Nardi",
  "projects.metaDescription":
    "A selection of things I've built, listed in the order I'd want you to see them.",
  "projects.heading": "Projects",

  "project.techStackAriaLabel": "Tech stack",
  "project.backToProjects": "Back to Projects",
  "project.repoLink": "Repository",
  "project.demoLink": "Live demo",
  "post.backToBlog": "Back to Blog",
  "post.published": "Published",
  "post.updated": "Updated",

  "eyebrow.getInTouch": "// Get in touch",
  "eyebrow.topProject": "// Top project",
  "eyebrow.latestPost": "// Latest post",
  "eyebrow.projects": "// Projects",
  "eyebrow.blog": "// Blog",
  "eyebrow.project": "// Project",
  "eyebrow.post": "// Post",

  "emptyState.projects": "No projects here yet — check back soon.",
  "emptyState.posts": "No posts here yet — check back soon.",

  "fallbackNotice.message":
    "This page isn't translated into Portuguese yet — showing the English version.",

  "footer.copyright": "© 2026 Matheus Nardi",
  "footer.tagline":
    "Built with Astro. No cookies, no tracking beyond page-level analytics.",

  "notFound.title": "404",
  "notFound.heading": "This page doesn't exist.",
  "notFound.body":
    "The page you're looking for may have moved or never existed.",
  "notFound.cta": "Go to homepage",
} as const;

export default en;

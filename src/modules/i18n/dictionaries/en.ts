// English UI dictionary: the complete set of fixed UI strings (05-design-spec.md §8, §11, §13).
// This dictionary is the source of truth for every dictionary key; `pt-br.ts` may omit a key to
// fall back to the value here (ADR-003, ADR-007).

const en = {
  "nav.skipLink": "Skip to main content",
  "nav.ariaLabel": "Primary",
  "nav.home": "Home",
  "nav.projects": "Projects",
  // Presentation-only rename (vision §11): the value here is "Writing" everywhere in the UI
  // (nav link, page H1, eyebrow, back-links) even though the key and the URL (`/blog/`) keep
  // their original name.
  "nav.blog": "Writing",

  "languageSwitcher.ariaLabel": "Language",
  "languageSwitcher.en": "EN",
  "languageSwitcher.ptBr": "PT-BR",

  "themeToggle.system": "Theme: following system setting",
  "themeToggle.light": "Theme: light",
  "themeToggle.dark": "Theme: dark",

  "mobileMenu.openLabel": "Open menu",
  "mobileMenu.navAriaLabel": "Menu",

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
  "post.backToBlog": "Back to Writing",
  "post.published": "Published",
  "post.updated": "Updated",

  "eyebrow.getInTouch": "// Get in touch",
  "eyebrow.topProject": "// Top project",
  "eyebrow.latestPost": "// Latest post",
  "eyebrow.projects": "// Projects",
  "eyebrow.blog": "// Writing",
  "eyebrow.project": "// Project",
  "eyebrow.post": "// Post",

  "emptyState.projects": "No projects here yet — check back soon.",
  "emptyState.posts": "No posts here yet — check back soon.",

  // Filter pills (05-design-spec.md §8 "Filter pill"; ADR-009). Value is the pill label and also
  // the `data-topics`-matching filter value, so it must equal the topic string used by entries.
  // `filter.emptyProjects`/`filter.emptyWriting` hold a `{filter}` placeholder the caller
  // (FilterList's `emptyMessage` per option, T-022/T-023) replaces with the matching pill label.
  "filter.all": "All",
  "filter.backend": "Backend",
  "filter.ai": "AI",
  "filter.product": "Product",
  "filter.go": "Go",
  "filter.architecture": "Architecture",
  "filter.projectsGroupLabel": "Filter projects by topic",
  "filter.writingGroupLabel": "Filter writing by topic",
  "filter.emptyProjects": "No {filter} projects yet — check back soon.",
  "filter.emptyWriting": "No {filter} posts yet — check back soon.",

  "sectionHead.viewAllProjects": "View all projects →",
  "sectionHead.viewAllWriting": "View all writing →",

  "onThisPage.projectLabel": "On this page",
  "onThisPage.articleLabel": "Article",

  "readingTime.suffix": "min read",

  "fallbackNotice.message":
    "This page isn't translated into Portuguese yet — showing the English version.",

  "footer.email": "Email",
  "footer.linkedin": "LinkedIn",
  "footer.resume": "Resume",
  "footer.backAllProjects": "← All projects",
  "footer.backAllWriting": "← All writing",
  "footer.forwardWriting": "Writing ↗",
  "footer.forwardProjects": "Projects ↗",
  "footer.tagline":
    "Built with Astro. No cookies, no tracking beyond page-level analytics.",

  "notFound.title": "404",
  "notFound.heading": "This page doesn't exist.",
  "notFound.body":
    "The page you're looking for may have moved or never existed.",
  "notFound.cta": "Go to homepage",
} as const;

export default en;

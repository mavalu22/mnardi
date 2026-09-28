import type en from "./en";

// Brazilian Portuguese UI dictionary. Deliberately partial: any key missing here falls back to
// the English value in `t()` (ADR-003, ADR-007). Values taken from the pt-BR prototypes
// (factory/input/prototypes/s03-project-detail-fallback.html, s06-404.html) where available.

const ptBr: Partial<Record<keyof typeof en, string>> = {
  "nav.skipLink": "Pular para o conteúdo principal",
  "nav.ariaLabel": "Principal",
  // Ground truth: factory/attachments/prototype/pt-br/index.html header nav — "Início" for Home,
  // "Projects" and "Writing" stay in English (TRANSITION_PROMPT.md §5.6).
  "nav.home": "Início",
  "nav.projects": "Projects",
  "nav.blog": "Writing",

  "languageSwitcher.ariaLabel": "Idioma",
  "languageSwitcher.en": "EN",
  "languageSwitcher.ptBr": "PT-BR",

  "themeToggle.system": "Tema: seguindo o sistema",
  "themeToggle.light": "Tema: claro",
  "themeToggle.dark": "Tema: escuro",

  // Drafted (not in the prototype, which has no pt-BR mobile menu sample): see DEV report.
  "mobileMenu.openLabel": "Abrir menu",
  "mobileMenu.navAriaLabel": "Menu",

  "home.highlightsHeading": "Destaques",
  "home.viewProject": "Ver projeto",
  "home.viewResume": "Ver currículo",
  "a11y.opensInNewTab": "(abre em uma nova aba)",

  "projects.pageTitle": "Projetos — Matheus Nardi",
  "projects.metaDescription":
    "Uma seleção de coisas que eu construí, na ordem em que eu gostaria que você as visse.",
  "projects.heading": "Projetos",

  "project.techStackAriaLabel": "Tecnologias utilizadas",
  "project.backToProjects": "Voltar para Projetos",
  "project.repoLink": "Repositório",
  "project.demoLink": "Demonstração",
  "post.backToBlog": "Voltar para Writing",
  "post.published": "Publicado em",
  "post.updated": "Atualizado em",

  "eyebrow.getInTouch": "// Fale comigo",
  "eyebrow.topProject": "// Projeto em destaque",
  "eyebrow.latestPost": "// Última publicação",
  "eyebrow.projects": "// Projetos",
  "eyebrow.blog": "// Writing",
  "eyebrow.project": "// Projeto",
  "eyebrow.post": "// Publicação",

  "emptyState.projects": "Ainda não há projetos aqui — volte em breve.",
  "emptyState.posts": "Ainda não há publicações aqui — volte em breve.",

  // Drafted (no pt-BR filter-pill sample in the prototype): topic words kept in English, matching
  // the nav/section-label convention (TRANSITION_PROMPT.md §5.6); "All" and the empty-state
  // sentences translated. See DEV report.
  "filter.all": "Todos",
  "filter.backend": "Backend",
  "filter.ai": "AI",
  "filter.product": "Product",
  "filter.go": "Go",
  "filter.architecture": "Architecture",
  "filter.projectsGroupLabel": "Filtrar projetos por tema",
  "filter.writingGroupLabel": "Filtrar publicações por tema",
  "filter.emptyProjects": "Ainda não há projetos de {filter} — volte em breve.",
  "filter.emptyWriting":
    "Ainda não há publicações de {filter} — volte em breve.",

  // Drafted (no pt-BR sample of the Home section heads' "view all" links): "Ver todos →" /
  // "Ver tudo →" are the pt-BR home prototype's own generic section-link wording
  // (pt-br/index.html), reused here as the listing pages' link text. See DEV report.
  "sectionHead.viewAllProjects": "Ver todos →",
  "sectionHead.viewAllWriting": "Ver tudo →",

  // "Nesta página" is the pt-BR prototype's own side-index label
  // (pt-br/projects/sample-task-tracker.html). "Artigo" for the article variant is drafted
  // (the pt-BR article sample's side index says "Article" in English, an inconsistent leftover
  // from the old spec that also names an "About" page which no longer exists) — see DEV report.
  "onThisPage.projectLabel": "Nesta página",
  "onThisPage.articleLabel": "Artigo",

  // Ground truth: pt-br/blog/sample-static-site-migration.html article meta line ("6 min de
  // leitura").
  "readingTime.suffix": "min de leitura",

  "fallbackNotice.message":
    "Esta página ainda não foi traduzida para o português — mostrando a versão em inglês.",

  // Ground truth: pt-br/index.html footer — "Projects", "Writing" and "Email" stay in English.
  "footer.email": "Email",
  "footer.linkedin": "LinkedIn",
  // pt-BR wording for "resume" per 01-product-vision.md's own terminology note ("currículo").
  "footer.resume": "Currículo",
  // Drafted (no pt-BR inner-page footer sample matching the current, approved spec): "Projects"/
  // "Writing" kept in English per the nav/footer convention above. See DEV report.
  "footer.backAllProjects": "← All projects",
  "footer.backAllWriting": "← All writing",
  "footer.forwardWriting": "Writing ↗",
  "footer.forwardProjects": "Projects ↗",
  "footer.tagline":
    "Construído com Astro. Sem cookies, sem rastreamento além das métricas por página.",

  "notFound.title": "404",
  "notFound.heading": "Esta página não existe.",
  "notFound.body":
    "A página que você procura pode ter mudado de endereço ou nunca ter existido.",
  "notFound.cta": "Ir para a página inicial",
};

export default ptBr;

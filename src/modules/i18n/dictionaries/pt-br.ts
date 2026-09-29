import type en from "./en";

// Brazilian Portuguese UI dictionary. Deliberately partial: any key missing here falls back to
// the English value in `t()` (ADR-003, ADR-007). Values taken from the pt-BR prototypes
// (factory/input/prototypes/s03-project-detail-fallback.html, s06-404.html) where available.

const ptBr: Partial<Record<keyof typeof en, string>> = {
  "nav.skipLink": "Pular para o conteúdo principal",
  "nav.ariaLabel": "Principal",
  // Ground truth: factory/attachments/prototype/pt-br/index.html header nav — "Início" for Home;
  // "Projetos"/"Anotações" translated per owner's explicit instruction (T-027, reverses the
  // earlier "stays in English" convention).
  "nav.home": "Início",
  "nav.projects": "Projetos",
  "nav.blog": "Anotações",

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

  // Ground truth: factory/attachments/prototype/pt-br/index.html.
  "home.linkedinButton": "LinkedIn",
  "home.resumeButton": "Currículo",
  "home.githubButton": "GitHub ↗",
  "home.focusLabel": "Foco",
  "home.coreLabel": "Core",
  "home.basedLabel": "Base",
  "home.projectsEyebrow": "01 / Projetos",
  "home.projectsTitle": "Coisas que eu construo.",
  "home.featuredLabelPrefix": "Destaque · ",
  "home.openProject": "Abrir projeto →",
  "home.writingEyebrow": "02 / Anotações",
  "home.writingTitle": "O que eu aprendo e explico.",
  "home.contactEyebrow": "03 / Contato",
  "home.contactNote":
    "Para conversas profissionais, colaboração ou simplesmente para dizer olá.",

  "projects.pageTitle": "Projetos — Matheus Nardi",
  "projects.metaDescription": "Uma seleção de coisas que eu construí.",
  "projects.heading": "Projetos",
  // Drafted (no pt-BR projects-index sample in the prototype, per T-022's Notes: the index
  // follows the English layout with translated chrome).
  "eyebrow.projectsIndex": "01 / Projetos",
  "projects.heroHeading": "Software que eu construí.",

  "project.techStackAriaLabel": "Tecnologias utilizadas",
  "project.backToProjects": "Voltar para Projetos",
  "project.repoLink": "Repositório",
  "project.demoLink": "Demonstração",
  // Ground truth: pt-br/projects/sample-task-tracker.html eyebrow ("Projeto / 2024").
  "project.eyebrowLabel": "Projeto",
  "post.backToBlog": "Voltar para Anotações",
  "post.published": "Publicado em",
  "post.updated": "Atualizado em",

  // Writing index page hero. Drafted (no pt-BR sample of this index in the prototype, T-023).
  "blog.pageTitle": "Anotações — Matheus Nardi",
  "blog.eyebrow": "02 / Anotações",
  "blog.heading": "O que eu aprendo, por escrito.",
  "blog.intro":
    "Notas técnicas e ensaios mais longos sobre engenharia de backend, desenvolvimento assistido por IA, design de software e lições que valem a pena guardar.",
  "post.eyebrowPrefix": "Anotações / ",

  "eyebrow.getInTouch": "// Fale comigo",
  "eyebrow.topProject": "// Projeto em destaque",
  "eyebrow.latestPost": "// Última publicação",
  "eyebrow.projects": "// Projetos",
  "eyebrow.blog": "// Anotações",
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

  "footer.navAriaLabel": "Rodapé",
  // Ground truth: pt-br/index.html footer — "Email" stays in English (proper noun); "Projetos"/
  // "Anotações" translated per owner's explicit instruction (T-027).
  "footer.email": "Email",
  // Drafted (no pt-BR inner-page footer sample matching the current, approved spec).
  "footer.backAllProjects": "← Todos os projetos",
  "footer.backAllWriting": "← Todas as anotações",
  "footer.forwardWriting": "Anotações ↗",
  "footer.forwardProjects": "Projetos ↗",
  "footer.tagline":
    "Construído com Astro. Sem cookies, sem rastreamento além das métricas por página.",

  "notFound.title": "404",
  "notFound.heading": "Esta página não existe.",
  "notFound.body":
    "A página que você procura pode ter mudado de endereço ou nunca ter existido.",
  "notFound.cta": "Ir para a página inicial",
};

export default ptBr;

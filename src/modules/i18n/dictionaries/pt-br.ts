import type en from "./en";

// Brazilian Portuguese UI dictionary. Deliberately partial: any key missing here falls back to
// the English value in `t()` (ADR-003, ADR-007). Values taken from the pt-BR prototypes
// (factory/input/prototypes/s03-project-detail-fallback.html, s06-404.html) where available.

const ptBr: Partial<Record<keyof typeof en, string>> = {
  "nav.skipLink": "Pular para o conteúdo principal",
  "nav.ariaLabel": "Principal",
  "nav.projects": "Projetos",
  "nav.blog": "Blog",

  "languageSwitcher.ariaLabel": "Idioma",
  "languageSwitcher.en": "EN",
  "languageSwitcher.ptBr": "PT-BR",

  "themeToggle.system": "Tema: seguindo o sistema",
  "themeToggle.light": "Tema: claro",
  "themeToggle.dark": "Tema: escuro",

  "home.highlightsHeading": "Destaques",
  "home.viewProject": "Ver projeto",
  "home.viewResume": "Ver currículo",
  "a11y.opensInNewTab": "(abre em uma nova aba)",

  "project.techStackAriaLabel": "Tecnologias utilizadas",
  "project.backToProjects": "Voltar para Projetos",
  "project.repoLink": "Repositório",
  "project.demoLink": "Demonstração",
  "post.backToBlog": "Voltar para o Blog",
  "post.published": "Publicado em",
  "post.updated": "Atualizado em",

  "eyebrow.getInTouch": "// Fale comigo",
  "eyebrow.topProject": "// Projeto em destaque",
  "eyebrow.latestPost": "// Última publicação",
  "eyebrow.projects": "// Projetos",
  "eyebrow.blog": "// Blog",
  "eyebrow.project": "// Projeto",
  "eyebrow.post": "// Publicação",

  "emptyState.projects": "Ainda não há projetos aqui — volte em breve.",
  "emptyState.posts": "Ainda não há publicações aqui — volte em breve.",

  "fallbackNotice.message":
    "Esta página ainda não foi traduzida para o português — mostrando a versão em inglês.",

  "footer.copyright": "© 2026 Matheus Nardi",
  "footer.tagline":
    "Construído com Astro. Sem cookies, sem rastreamento além das métricas por página.",

  "notFound.title": "404",
  "notFound.heading": "Esta página não existe",
  "notFound.body":
    "A página que você procura pode ter mudado de endereço ou nunca ter existido.",
  "notFound.cta": "Ir para a página inicial",
};

export default ptBr;

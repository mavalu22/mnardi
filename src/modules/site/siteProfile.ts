// SiteProfile: the owner's public profile (03-platform-architecture.md §5). A typed TypeScript
// object, not a content collection. `en` texts are required; `pt-br` is optional and falls back
// to `en` (see profileFor.ts). Plain `.ts`, no `astro:*` import except the type-only `ImageMetadata`
// (a type import, erased at build time, so this file stays free of the Astro runtime).
import type { ImageMetadata } from "astro";
import type { Locale } from "../i18n";
import profilePhoto from "./assets/profile-photo.jpeg";

export interface ProfileText {
  photoAlt: string;
  /** One-sentence intro under the Home hero's H1 (05-design-spec.md §8 "Home hero"). */
  intro: string;
  /** The hero aside's short paragraph, above the Focus/Core/Based rows. */
  asideNote: string;
  /** Focus row value, e.g. "Software Engineering · AI". */
  focus: string;
  /** Core row value, e.g. "AI · Go · Python". */
  core: string;
  /** Based row value, e.g. "Brazil · UTC−3". */
  based: string;
  /** Path to a resume PDF under `public/`, e.g. "/resume/matheus-nardi-en.pdf". */
  resume: string;
}

export type ProfileTextByLocale = Record<"en", ProfileText> &
  Partial<Record<Exclude<Locale, "en">, Partial<ProfileText>>>;

export interface SiteProfile {
  name: string;
  photo: ImageMetadata;
  email: string;
  linkedin: string;
  github: string;
  siteUrl: string;
  texts: ProfileTextByLocale;
}

export const siteProfile: SiteProfile = {
  name: "Matheus Nardi",
  photo: profilePhoto,
  email: "matheusnardi@gmail.com",
  linkedin: "https://www.linkedin.com/in/matheuseliziario/",
  github: "https://github.com/mavalu22",
  siteUrl: "https://mnardi.com",
  texts: {
    // English hero copy: exact ground truth from factory/attachments/prototype/index.html
    // (05-design-spec.md §13 "not invented copy").
    en: {
      photoAlt: "Portrait of Matheus Nardi",
      intro:
        "I build software, study how systems work, and write about the engineering decisions behind them.",
      asideNote:
        "This site is my technical hub: a place for shipped software, ongoing work, and ideas worth writing down.",
      focus: "Software Engineering · AI",
      core: "AI · Go · Python",
      based: "Brazil · UTC−3",
      resume: "/resume/matheus-nardi-en.pdf",
    },
    // pt-BR hero copy: ground truth from factory/attachments/prototype/pt-br/index.html. `resume`
    // and `photoAlt` are not supplied yet, so profileFor("pt-br") falls back to the English value
    // for those two fields (03 §5, ADR-003).
    "pt-br": {
      intro:
        "Eu construo software, estudo como sistemas funcionam e escrevo sobre as decisões de engenharia por trás deles.",
      asideNote:
        "Este site é meu hub técnico: um lugar para reunir software que construo, trabalho em andamento e ideias que valem ser registradas.",
      focus: "Software Engineering · AI",
      core: "AI · Go · Python",
      based: "Brasil · UTC−3",
    },
  },
};

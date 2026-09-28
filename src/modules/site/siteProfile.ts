// SiteProfile: the owner's public profile (03-platform-architecture.md §5). A typed TypeScript
// object, not a content collection. `en` texts are required; `pt-br` is optional and falls back
// to `en` (see profileFor.ts). Plain `.ts`, no `astro:*` import except the type-only `ImageMetadata`
// (a type import, erased at build time, so this file stays free of the Astro runtime).
import type { ImageMetadata } from "astro";
import type { Locale } from "../i18n";
import profilePhoto from "./assets/profile-photo.jpeg";

export interface ProfileText {
  headline: string;
  bio: string;
  photoAlt: string;
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
    en: {
      headline:
        "Backend Software Engineer with 5 years building production systems in Go, Python and PHP",
      bio: "At Segura, a cybersecurity company, redesigned an EPM/PEDM product database from 50+ tables down to 25, led a PHP 7.0 to 8.1 migration with zero downtime, integrated Swoole to increase backend throughput without additional infrastructure, and implemented Elasticsearch for product logging. More recently, works at the intersection of backend engineering and AI: building datasets used to train coding models, reviewing and validating AI-generated code, and engineering production-grade prompts. Based in Vitória, Brazil (UTC-3), fully overlapping with US business hours. Open to remote roles, or relocation with visa sponsorship. Tech: Go (Gin), Python, PHP, PostgreSQL, MariaDB, Elasticsearch, Docker, AWS, REST, gRPC, async processing, database schema design.",
      photoAlt: "Portrait of Matheus Nardi",
      resume: "/resume/matheus-nardi-en.pdf",
    },
    // No pt-BR headline/bio/photoAlt/resume supplied yet: profileFor("pt-br") falls back to the
    // English text for each undefined field (03 §5, ADR-003).
  },
};

// Local Astro integration that runs the resume check (03-platform-architecture.md §5). Registered
// in astro.config.ts. Uses the `astro:config:done` hook, which runs on both `astro dev` and
// `astro build`, so a dead resume link fails the dev server too, not just the build.
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import { checkResumes } from "./checkResumes";
import { siteProfile } from "./siteProfile";

export function resumeCheckIntegration(): AstroIntegration {
  return {
    name: "site-resume-check",
    hooks: {
      "astro:config:done": ({ config }) => {
        const publicDir = fileURLToPath(config.publicDir);
        checkResumes(siteProfile, publicDir);
      },
    },
  };
}

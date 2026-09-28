import { defineConfig, envField } from "astro/config";

// FACTORY_SLOT: process-environment integer, unset/empty/invalid means slot 0 (04-stack-profile.md §14).
const slot = Number.parseInt(process.env.FACTORY_SLOT ?? "", 10) || 0;

export default defineConfig({
  output: "static",
  site: "https://mnardi.com",
  server: { port: 4321 + 10 * slot },
  env: {
    schema: {
      PUBLIC_UMAMI_WEBSITE_ID: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
  },
  vite: {
    server: {
      watch: {
        ignored: ["**/factory/**"],
      },
    },
  },
});

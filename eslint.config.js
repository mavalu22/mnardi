import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist/", ".astro/", "factory/"]),
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      "no-console": "error",
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "**/modules/*/*",
                "!**/modules/*/index",
                "!**/modules/*/index.ts",
              ],
              message:
                "Import another module only from its index.ts (see 03-platform-architecture.md §4).",
            },
          ],
        },
      ],
    },
  },
]);

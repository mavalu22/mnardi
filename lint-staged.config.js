export default {
  "*.{js,mjs,ts,astro}": [
    "eslint --max-warnings=0 --no-warn-ignored",
    "prettier --check",
  ],
  "*.{css,json,md,yaml,yml}": "prettier --check --ignore-unknown",
  "*.{ts,astro}": () => "astro check --minimumSeverity warning",
};

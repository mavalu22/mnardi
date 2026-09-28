// Public interface of the analytics module (03-platform-architecture.md §4).
// Only this module knows that Umami exists; swapping providers touches only
// this file and Analytics.astro.
export { default as Analytics } from "./Analytics.astro";

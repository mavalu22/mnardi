// Astro requires the content collections config at this exact path (04-stack-profile.md §1). It
// only re-exports `collections`; the schemas and loaders live in the `content` module
// (03-platform-architecture.md §4).
export { collections } from "./modules/content";

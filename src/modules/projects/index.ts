// Public interface of the `projects` module (03-platform-architecture.md §4). Other modules, and
// route files, import only from this file, never from a file inside `src/modules/projects/`.

export { default as ProjectPage } from "./ProjectPage.astro";

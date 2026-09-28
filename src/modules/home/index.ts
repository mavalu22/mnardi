// Public interface of the `home` module (03-platform-architecture.md §4). Other modules, and
// route files, import only from this file, never from a file inside `src/modules/home/`.

export { default as HomePage } from "./HomePage.astro";

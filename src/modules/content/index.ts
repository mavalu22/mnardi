// Public interface of the `content` module (03-platform-architecture.md §4). Other modules import
// only from this file, never from a file inside `src/modules/content/` directly. Only files in this
// module import `astro:content` (collections.ts, repository.ts).

export {
  getProject,
  getProjects,
  getPost,
  getPosts,
  projectPaths,
  postPaths,
  renderProject,
  renderPost,
} from "./repository";
export type { RenderedBody } from "./repository";
export type { Project, Post, ProjectLinks } from "./types";
// Re-exported so src/content.config.ts (which Astro requires at that exact path) can import it
// through this module's public interface instead of reaching into collections.ts directly.
export { collections } from "./collections";

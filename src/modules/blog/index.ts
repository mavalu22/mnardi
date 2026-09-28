// Public interface of the `blog` module (03-platform-architecture.md §4: `<PostPage entry>`,
// depends on `layout`, `content`, `i18n`). Other modules import only from this file.

export { default as PostPage } from "./PostPage.astro";
export { default as BlogListPage } from "./BlogListPage.astro";

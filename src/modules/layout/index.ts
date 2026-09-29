// Public interface of the layout module (04-stack-profile.md §1).
// Other modules import these components only from this file.
import "./styles/global.css";

export { default as BaseLayout } from "./BaseLayout.astro";
export { default as EmptyState } from "./components/EmptyState.astro";
export { default as FallbackNotice } from "./components/FallbackNotice.astro";
export { default as Button } from "./components/Button.astro";
export { default as Tag } from "./components/Tag.astro";
export { default as SectionHead } from "./components/SectionHead.astro";
export { default as EntryRow } from "./components/EntryRow.astro";
export { default as MetaGrid } from "./components/MetaGrid.astro";
export { default as FilterList } from "./components/FilterList.astro";
export { default as Prose } from "./components/Prose.astro";
export { default as OnThisPage } from "./components/OnThisPage.astro";

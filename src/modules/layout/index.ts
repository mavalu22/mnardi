// Public interface of the layout module (04-stack-profile.md §1).
// Other modules import these components only from this file.
import "./styles/global.css";

export { default as BaseLayout } from "./BaseLayout.astro";
export { default as Card } from "./components/Card.astro";
export { default as EmptyState } from "./components/EmptyState.astro";
export { default as FallbackNotice } from "./components/FallbackNotice.astro";

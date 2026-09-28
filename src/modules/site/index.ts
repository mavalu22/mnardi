// Public interface of the `site` module (03-platform-architecture.md §4). Other modules import
// only from this file, never from a file inside `src/modules/site/` directly.

export { siteProfile, type SiteProfile, type ProfileText } from "./siteProfile";
export { profileFor } from "./profileFor";
export { resumeCheckIntegration } from "./resumeCheckIntegration";

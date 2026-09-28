## 2025-02-01 - Add ARIA label to Profiler close button
**Learning:** Found an icon-only close button in `devtools/client/aboutdebugging/src/components/ProfilerDialog.js` that was missing a title or ARIA label, making it difficult to use for screen readers or without a mouse.
**Action:** Wrapped the `dom.button` with `Localized` and passed `attrs: { title: true, "aria-label": true }` to apply localization attributes to the button, pulling the strings from `devtools/client/locales/en-US/aboutdebugging.ftl`.

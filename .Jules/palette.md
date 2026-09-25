## 2024-05-14 - Missing aria-label for devtools icon-only buttons
**Learning:** Found several icon-only buttons (like `#settings-button` in devtools' responsive UI) that lack both a title and an `aria-label`. In this codebase, tooltips are often implemented via `title`, but standard screen-reader support demands `aria-label` or equivalent text. Buttons without content or explicit ARIA attributes are entirely inaccessible to screen reader users.

**Action:** Always add explicit text or an `aria-label` attribute (along with a `title` attribute for mouse-hover tooltips, where appropriate) to icon-only buttons in devtools.

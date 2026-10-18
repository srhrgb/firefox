## 2024-11-20 - Adding ARIA labels to icon-only buttons in animation inspector
**Learning:** React DOM factory components like `dom.button()` in DevTools only receive a `title` attribute for tooltips by default. They require explicit `aria-label` attributes for full screen reader accessibility.
**Action:** When adding or updating tooltips for `dom.button()` or `dom.a()` without text, ensure an `aria-label` is also included.

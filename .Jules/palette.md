## 2024-05-18 - Tooltips on DevTools Buttons
**Learning:** Icon-only buttons in Firefox DevTools (e.g., the Animation panel close button) heavily rely on `title` and `aria-label` for screen reader accessibility, and must pull localized strings using `getStr`.
**Action:** Always verify that icon-only `dom.button` elements in the DevTools React codebase include both `title` and `aria-label` attributes localized via `getStr`.

## 2024-05-18 - Added accessible close button to ProfilerDialog
**Learning:** Found an accessibility issue where an icon-only "close" button lacked an accessible name (no title or aria-label), which affects screen reader users. The devtools UI uses the Fluent React `Localized` component to inject such strings.
**Action:** Wrapped the button with `Localized`, adding `title` and `aria-label` properties defined in `aboutdebugging.ftl`, ensuring consistent localization and accessibility for icon-only elements.

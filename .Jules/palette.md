## 2024-06-03 - Found accessibility issues in custom device buttons
**Learning:** Found two icon-only buttons in `devtools/client/responsive/components/DeviceList.js` that lacked `title` and `aria-label` attributes, making them inaccessible to screen readers and difficult to understand without hovering.
**Action:** Adding `title` and `aria-label` attributes to these buttons is a key accessibility improvement that helps screen reader users navigate the UI.

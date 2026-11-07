## 2024-05-14 - Animation Inspector ARIA labels
**Learning:** Found an accessibility issue pattern specific to DevTools animation components: icon-only buttons (e.g. Pause/Resume, Rewind, Element Picker, Close Detail Panel) rely exclusively on the `title` attribute for tooltips, but lack the explicitly required `aria-label` for screen readers in the `dom.button()` factory, causing poor accessibility context.
**Action:** Always explicitly provide an `aria-label` matching the `title` when creating icon-only DevTools interactive elements using React DOM factories.

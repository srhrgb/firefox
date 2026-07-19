## 2026-07-19 - Added accessible labels to Animation Details close button
**Learning:** Found a common pattern in DevTools UI React components where icon-only buttons (like `animation-detail-close-button`) were missing both tooltips (`title`) and screen reader text (`aria-label`). This severely limits accessibility.
**Action:** Always ensure icon-only DOM factories (like `dom.button`) include both `title` and `aria-label` pointing to the same localized string.

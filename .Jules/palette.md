## 2024-05-18 - Added `aria-label` to DevTools NetMonitor Toolbar icon-only buttons
**Learning:** Icon-only buttons in Firefox DevTools React UI often rely on `title` attributes for tooltips but sometimes miss explicit `aria-label` properties, which makes them inaccessible or redundant to screen reader users if tooltips aren't picked up correctly.
**Action:** Always ensure that React `dom.button` instances used as icon-only actions have explicit `aria-label`s mirroring their tooltips, especially in frequently used areas like the Network Monitor toolbar.

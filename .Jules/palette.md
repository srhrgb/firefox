## 2026-05-27 - Add ARIA label to device settings close button
**Learning:** Icon-only buttons in the DevTools UI (like DeviceSettings close button) need consistent string IDs applied to both `title` and `aria-label` when using `dom.button()` in React.
**Action:** Found the close button lacked text context. Added `responsive.deviceSettings.close` string and assigned it to both properties.

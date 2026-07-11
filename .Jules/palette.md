## 2024-07-11 - Add accessible labels to device settings close button
**Learning:** In Firefox DevTools, the `DeviceModal` close button (`device-close-button`) lacked an `aria-label` and `title`, which are critical for screen reader users and tooltip clarity on icon-only buttons.
**Action:** Always ensure icon-only buttons in React UI components have both `aria-label` and `title` attributes using a centralized localization string (e.g. `responsive.deviceSettingsClose`) to remain accessible and informative.

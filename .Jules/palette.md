## 2023-10-31 - Add ARIA label to Animation Detail Close Button
**Learning:** Icon-only close buttons in the DevTools Animation Inspector lacked both visual tooltips and screen reader accessible names, which are critical for users navigating via keyboard or assistive technologies. The \`title\` and \`aria-label\` attributes should be synced to provide a consistent experience.
**Action:** Always provide an explicit \`aria-label\` and \`title\` to icon-only buttons created with \`dom.button\` in React, localizing the string to ensure it is accessible to all users.

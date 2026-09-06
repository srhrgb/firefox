
## $(date +%Y-%m-%d) - Adding accessibility labels to DevTools React buttons
**Learning:** Icon-only buttons created via React DOM factories (`dom.button`) in Firefox DevTools often lack accessible names, rendering them invisible to screen readers and lacking hover tooltips for sighted users.
**Action:** Always provide an explicit `aria-label` (and often a matching `title` for the visual tooltip) to `dom.button` instances that only contain visual elements (like icons or CSS classes) and no text nodes.

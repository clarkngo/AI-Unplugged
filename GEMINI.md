# Project Guidance for Generators

This repository renders an elegant React single-page application (SPA) using Vite and React Router with HashRouter. Follow these rules when generating or modifying code/content:

- Router: Use `HashRouter` (not `BrowserRouter`). This ensures compatibility with static hosting and avoids 404s on page refresh.
- Pages: Keep one route per lesson (see existing routes in `App.jsx`).
- Styles: Maintain the elegant design defined in `src/App.css`. Favor modern, accessible UI patterns.
- Assets: Do NOT import from the `reference/` folder anymore. The `reference/` directory is archival context and must be ignored for future code and asset imports. If you need images, place them under `public/` or `src/assets/` and import/reference them from there.
- Accessibility: Use semantic headings, meaningful alt text, and sufficient color contrast.
- Reference folder policy: No new code should read or import from `reference/`. Treat it as documentation only.

Documentation discipline:

- Every structural change (routes, layout, navigation, directory moves, build config) must be recorded in `CHANGELOG.md` with:
  - ISO 8601 UTC timestamp
  - What changed
  - Why it changed (brief reasoning)
- When adding new sections or pages, update navigation on the Home route and include breadcrumbs in pages for consistency.

Build and routing specifics:

- `src/main.jsx` must wrap `<App />` inside `<HashRouter>`.
- `App.jsx` defines all app routes and the global layout (including the navbar).
- Keep `vite.config.js` base path consistent with deployment target; HashRouter handles subpath refreshes.

Pre-push checklist:

- **Always run `npm run build` before committing and pushing code.**
  - This ensures the production build succeeds and catches any build-time errors.
  - Verify the build completes with no errors or warnings.
- Run the dev server (`npm run dev`) to visually verify changes if needed.
- Update `CHANGELOG.md` if you made structural changes.

Feature flags:

- Implement banners or experimental flags via the top-level layout, not individual pages. Remove temporary banners promptly once not needed.

If you make changes, cross-verify:

- Build succeeds and the pages render without console errors.
- Links navigate within the SPA and deep links load via HashRouter.
- Update `CHANGELOG.md` with the timestamp and reasoning.

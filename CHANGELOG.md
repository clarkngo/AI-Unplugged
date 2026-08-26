# Changelog

All notable structural changes to this project will be documented in this file. Use ISO 8601 timestamps (UTC) and include the reasoning for each change.

## 2026-08-27T00:00:00Z

- Fixed a factual contradiction introduced by the previous "Intelligent Paper" content fix: `STEMK12.jsx` and `K5to8.jsx` still paired "Hexapawn / Intelligent Paper" together as one "learning from feedback" activity, but the corrected `WhatIsAI.jsx` framing explicitly says Intelligent Paper is a static rule-lookup game that never learns — the deliberate foil to Hexapawn, not a variant of it. Removed "Intelligent Paper" from both listings so only `WhatIsAI.jsx` describes it, and each page now names only the activity it actually contains.
  - Reasoning: caught by an independent follow-up content review; the two pages were making contradictory claims about the same named activity.
- Deleted 10 orphaned image assets confirmed unreferenced anywhere in `src/`: `brain-in-a-bag.png`/`.svg` (superseded by the `-start`/`-end` pair), the `.svg` counterparts of five now-PNG-only activity images (`ai-ethics-scenarios`, `hexapawn-board`, `intelligent-paper-rules`, `robot-design`, `story-dice`), and the `.png` counterparts of the three face-emotion SVGs actually used in `ComputerVision.jsx`.
  - Reasoning: dead assets with no import or reference anywhere in the codebase.

## 2026-08-26T06:03:00Z

- Fixed a broken route: `NavBar` linked to `/topics` but `Topics.jsx` was never registered in `App.jsx`, so the link rendered a blank page. Added the route plus a catch-all `*` route with a new `NotFound.jsx` page.
  - Reasoning: dead link and unhandled invalid hash paths are a real navigation bug.
- Deleted `src/pages/K1-4.jsx`, `K5-8.jsx`, `K9-12.jsx` — 0-byte orphaned files left behind when they were renamed to `K1to4.jsx`/`K5to8.jsx`/`K9to12.jsx` for valid JS identifiers.
  - Reasoning: dead code with no imports anywhere.
- Rewrote `NavBar` to link to all ~13 routes (previously only 7 were reachable from the nav) and added a mobile hamburger menu — the old nav had no responsive handling and wrapped into an unstyled multi-line block below 860px.
  - Reasoning: several pages (Generative AI, AI Ethics, Robotics, the K-band pathways) were only discoverable via Home; mobile nav was unusable.
- Added a dark mode toggle (`prefers-color-scheme` default + manual override persisted in `localStorage`) and a full visual refresh in `App.css`: new type system (Baloo 2 display font + Inter body), a violet/orange gradient palette expressed as CSS variables for both themes, pill buttons, icon-badge cards, and CSS rules for `.print-btn`, `.muted`, and `.topics-list`, which were used in JSX but previously had no styles at all.
  - Reasoning: requested site modernization; unstyled classes were rendering as unthemed browser defaults.
- Fixed two content accuracy issues: the self-driving-car blurb in `MachineLearning.jsx` overclaimed reinforcement learning as the driving mechanism, and `NLP.jsx` mislabeled the "Brain-in-a-Bag" bead activity a "neural network" when it's the same reward/punish (reinforcement-style) mechanism as the Hexapawn activity.
  - Reasoning: technical accuracy for an educational site.
- Wrote real content for the "Intelligent Paper" activity on `WhatIsAI.jsx` (a Tic-Tac-Toe rule-lookup game demonstrating symbolic/rule-based AI), reusing the existing but previously unwired `intelligent-paper-rules.png` asset — the name was referenced three times across the site (`WhatIsAI`, `STEMK12`, `K5to8`) but the activity itself was never written up.
  - Reasoning: closed a real content gap.
- Lightened the tone of `Topics.jsx` to match the playful voice used everywhere else on the site (it read as dry/academic), and wired the existing unused `happy-face.svg`/`sad-face.svg`/`surprised-face.svg` assets into the `ComputerVision.jsx` Create-a-Face activity, which described those emotions in text but never displayed them.
  - Reasoning: content consistency and using assets that already existed for the purpose they were made for.

## 2025-10-16T00:00:00Z

- Introduced React Router with HashRouter and converted reference HTML pages into React routes.
  - Reasoning: Provide SPA navigation compatible with static hosting (including GitHub Pages) without server-side routing. HashRouter avoids 404s on refresh.
- Added routes and page components that mirror `reference/*.html` content:
  - `/` (Home), `/what-is-ai`, `/how-to-teach`, `/machine-learning`, `/computer-vision`, `/nlp`, `/generative-ai`, `/ai-ethics`, `/robotics`.
  - Reasoning: Reuse curated educational content as React views for maintainability and interactivity.
- Imported `reference/style.css` directly into React to preserve visual design.
  - Reasoning: Maintain existing styling while incrementally migrating to components.
- Updated `src/main.jsx` to wrap `<App />` with `<HashRouter>`.
  - Reasoning: Activate routing and enable client-side navigation.

## 2025-10-16T00:10:00Z

- Added site-wide GPT-5 feature banner and layout wrapper using React Router `Outlet`.
  - Reasoning: Implements the "Enable GPT-5 for all clients" request as a non-invasive, globally visible flag. The layout centralizes future global UI (e.g., nav, toasts) without touching each page.

## 2025-10-16T00:25:00Z

- Removed GPT-5 banner text from the UI and introduced a modern, elegant design system in `src/App.css` (navbar, gradients, card styles, accessible colors).
  - Reasoning: Align with a cleaner, more cohesive visual identity and remove temporary messaging.
- Stopped importing assets and styles from `reference/`; all references to `../reference/*` images were removed.
  - Reasoning: The `reference/` folder is now archival context only. Future assets must live under `public/` or `src/assets/`.
- Added a top navigation bar (`NavBar`) and consolidated global layout usage.
  - Reasoning: Provide consistent navigation and prepare for future expansion.

## 2025-10-16T00:40:00Z

- Centered primary content containers and switched to a light, playful theme in `src/App.css` (white cards, subtle shadows, blue/orange accents), inspired by csunplugged.org.
  - Reasoning: Improve readability, visual hierarchy, and align with a friendly educational aesthetic.

## 2025-10-16T00:55:00Z

- Added a centered hero section on Home with primary/secondary CTAs; ensured section headings are centered and added anchor for Activities.
  - Files: `src/App.jsx` (Header hero buttons, Activities id), `src/App.css` (hero CTA styles, centered section titles, lesson-content title centering).
  - Reasoning: Fix remaining alignment issues and match csunplugged.org-like landing feel.

## 2025-10-16T01:10:00Z

- Enhanced content centering across all pages for improved visual balance.
  - Files: `src/App.css` (container width 100%, lesson-content width/margin, header max-width, lesson-grid max-width, improved spacing).
  - Changes: Added explicit width constraints, centered headers, improved margins and line-height for readability, ensured consistent centering throughout.
  - Reasoning: Ensure all content (hero, grids, lesson cards, text content) is perfectly centered and responsive across all screen sizes.

## 2025-10-16T01:25:00Z

- Fixed card grid layout and improved visual proportions throughout the site.
  - Files: `src/App.css` (lesson-grid, lesson-card, container, header, cta-group).
  - Changes:
    - Changed grid to `minmax(280px, 340px)` with `justify-content: center` to prevent cards from stretching too wide
    - Reduced container max-width to 960px for better visual balance
    - Centered card content with larger icons (52px) and improved typography
    - Enhanced button sizing and spacing (12px padding, 24px horizontal)
    - Improved section spacing and title styling
  - Reasoning: Cards were stretching too wide on the grid, especially in "Getting Started" section. New layout creates compact, well-proportioned cards that maintain consistent sizing.

## 2025-10-16T01:40:00Z

- **CRITICAL FIX**: Corrected Vite base path to match GitHub repository name.
  - Files: `vite.config.js`
  - Changes: Changed `base: '/AI-tools/'` to `base: '/AI-Unplugged/'`
  - Reasoning: The base path must match the GitHub repository name for GitHub Pages to correctly serve all assets (CSS, JS, images). Previous mismatch caused 404 errors and unstyled pages on production deployment.
  - Impact: Fixes styling not loading on https://clarkngo.github.io/AI-Unplugged/

## 2025-10-16T01:50:00Z

- Simplified index.css to basic resets only, removed conflicting Vite default styles.
  - Files: `src/index.css`
  - Changes: Replaced Vite's default theme styles with minimal reset (margin 0, padding 0, box-sizing, body font-family)
  - Reasoning: The default Vite styles (dark theme, specific colors, button styles) were conflicting with our custom App.css design system. App.css already defines all necessary body and global styles, so index.css should only provide basic resets.
  - Impact: Ensures consistent styling without conflicts between index.css and App.css.

Future changes: For any new or modified routes, components, or public assets, add an entry here with a timestamp and brief rationale.

## 2025-10-16T02:20:00Z

- Migrated all lesson images from `reference/` into `public/images/` and updated pages to use public URLs.
  - Files: `public/images/*` (intelligent-paper-rules.png, hexapawn-board.svg, happy-face.svg, sad-face.svg, surprised-face.svg, brain-in-a-bag.svg, story-dice.svg, ai-ethics-scenarios.svg, robot-design.png)
  - Reasoning: Treat `reference/` as an archive; ensure the app is self-contained at runtime and deployable via GitHub Pages.
- Introduced `src/utils/paths.js` with `asset()` helper that respects Vite `import.meta.env.BASE_URL`.
  - Reasoning: Guarantee correct image paths in both local dev (`/`) and production on GitHub Pages (`/AI-Unplugged/`).
- Refactored monolithic `src/App.jsx` into modular components and pages.
  - Added components: `src/components/NavBar.jsx`, `src/components/Breadcrumbs.jsx`, `src/components/Header.jsx`.
  - Added pages: `src/pages/Home.jsx`, `src/pages/WhatIsAI.jsx`, `src/pages/HowToTeach.jsx`, `src/pages/MachineLearning.jsx`, `src/pages/ComputerVision.jsx`, `src/pages/NLP.jsx`, `src/pages/GenerativeAI.jsx`, `src/pages/AIEthics.jsx`, `src/pages/Robotics.jsx`.
  - Reasoning: Improve maintainability, readability, and future extensibility without changing route structure.

## 2025-10-16T02:35:00Z
- Added placeholder pages and routes for K-12 grade bands and corrected naming.
  - Files: `src/pages/K1to4.jsx`, `src/pages/K5to8.jsx`, `src/pages/K9to12.jsx`, `src/App.jsx`.
  - Changes:
    - Created new page components for K-4, 5-8, and 9-12 grade bands.
    - Added routes `/k-1-4`, `/k-5-8`, and `/k-9-12` to `App.jsx`.
    - Renamed files and components from `K1-4` to `K1to4` (etc.) to follow valid JS identifier conventions.
  - Reasoning: Fulfill the site structure implied by links on the Home and STEM K-12 pages and ensure component names are valid identifiers.

## 2025-10-16T02:35:00Z

- Added detailed lesson plans for K-12 grade bands and refactored into a reusable component.
  - Files: `src/pages/K1to4.jsx`, `src/pages/K5to8.jsx`, `src/pages/K9to12.jsx`, `src/components/LessonPlan.jsx`, `src/App.css`.
  - Changes:
    - Created a reusable `LessonPlan.jsx` component to standardize lesson structure.
    - Refactored K-12 pages to use the new component.
    - Added a third lesson to each grade band page to align with `STEMK12.jsx` content.
    - Added a "Printable pack" button to each lesson page.
  - Reasoning: Improve code maintainability by reducing duplication and enhance user experience by providing more complete, actionable content for educators.

- Updated site branding and hero title from "AI Adventures for Kids" to "AI Unplugged"; adjusted emojis to match the unplugged theme.
  - Files: `src/components/Header.jsx` (hero title), `src/components/NavBar.jsx` (brand text)
  - Reasoning: Align UI copy and visuals with the repository and project identity.

## 2025-10-16T02:45:00Z

- Updated HTML document title and Open Graph title to "🔌 AI Unplugged"; aligned README to project branding and usage.
  - Files: `index.html` (title, og:title), `README.md` (project readme)
  - Reasoning: Ensure consistent branding across the document title, social previews, and repository documentation.

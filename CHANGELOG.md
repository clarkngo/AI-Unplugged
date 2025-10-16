# Changelog

All notable structural changes to this project will be documented in this file. Use ISO 8601 timestamps (UTC) and include the reasoning for each change.

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
  - Files: `public/images/*` (intelligent-paper-rules.svg, hexapawn-board.svg, happy-face.svg, sad-face.svg, surprised-face.svg, brain-in-a-bag.svg, story-dice.svg, ai-ethics-scenarios.svg, robot-design.svg)
  - Reasoning: Treat `reference/` as an archive; ensure the app is self-contained at runtime and deployable via GitHub Pages.
- Introduced `src/utils/paths.js` with `asset()` helper that respects Vite `import.meta.env.BASE_URL`.
  - Reasoning: Guarantee correct image paths in both local dev (`/`) and production on GitHub Pages (`/AI-Unplugged/`).
- Refactored monolithic `src/App.jsx` into modular components and pages.
  - Added components: `src/components/NavBar.jsx`, `src/components/Breadcrumbs.jsx`, `src/components/Header.jsx`.
  - Added pages: `src/pages/Home.jsx`, `src/pages/WhatIsAI.jsx`, `src/pages/HowToTeach.jsx`, `src/pages/MachineLearning.jsx`, `src/pages/ComputerVision.jsx`, `src/pages/NLP.jsx`, `src/pages/GenerativeAI.jsx`, `src/pages/AIEthics.jsx`, `src/pages/Robotics.jsx`.
  - Reasoning: Improve maintainability, readability, and future extensibility without changing route structure.

## 2025-10-16T02:35:00Z

- Updated site branding and hero title from "AI Adventures for Kids" to "AI Unplugged"; adjusted emojis to match the unplugged theme.
  - Files: `src/components/Header.jsx` (hero title), `src/components/NavBar.jsx` (brand text)
  - Reasoning: Align UI copy and visuals with the repository and project identity.

## 2025-10-16T02:45:00Z

- Updated HTML document title and Open Graph title to "🔌 AI Unplugged"; aligned README to project branding and usage.
  - Files: `index.html` (title, og:title), `README.md` (project readme)
  - Reasoning: Ensure consistent branding across the document title, social previews, and repository documentation.


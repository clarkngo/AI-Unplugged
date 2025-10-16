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

Future changes: For any new or modified routes, components, or public assets, add an entry here with a timestamp and brief rationale.

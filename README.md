# 🔌 AI Unplugged

An educational, kid-friendly site that teaches core AI concepts through unplugged, hands-on activities — no computer required for the activities themselves. Built with React + Vite, and designed to deploy as a single static page to GitHub Pages.

Live at: **https://clarkngo.github.io/AI-Unplugged/**

## What's in it

- [`src/pages/`](src/pages/) — one page per lesson: [What is AI?](src/pages/WhatIsAI.jsx), [Machine Learning](src/pages/MachineLearning.jsx), [Computer Vision](src/pages/ComputerVision.jsx), [NLP](src/pages/NLP.jsx), [Generative AI](src/pages/GenerativeAI.jsx), [AI Ethics](src/pages/AIEthics.jsx), and [Robotics](src/pages/Robotics.jsx), plus [How to Teach](src/pages/HowToTeach.jsx) and three K‑12 pathway packs ([K 1–4](src/pages/K1to4.jsx), [K 5–8](src/pages/K5to8.jsx), [K 9–12](src/pages/K9to12.jsx)).
- [`src/components/`](src/components/) — shared `NavBar`, `Header`, `Breadcrumbs`, and `LessonPlan` components.
- [`src/App.jsx`](src/App.jsx) — route table and layout; uses `HashRouter` so deep links survive a refresh on static hosting.
- [`public/images/`](public/images/) — activity artwork and diagrams referenced by the lesson pages.
- [`archive/`](archive/) — the original static-HTML version of the site, kept for reference only. Nothing in the app imports from it.

Built with React 19, React Router 7, and Vite, with `vite-plugin-singlefile` inlining the production build into one `index.html`.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL Vite prints. The app uses `HashRouter`, so refreshes won't 404 on static hosts.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build (run this before pushing — see [`GEMINI.md`](GEMINI.md))
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Deploying it

### GitHub Pages

`vite.config.js` sets `base: '/AI-Unplugged/'` so built asset paths resolve under a project-pages subpath. Pushing to `main` builds and publishes via the workflow in [`.github/`](.github/); no manual deploy step is needed.

If you fork this to a repo with a different name, update `base` in [`vite.config.js`](vite.config.js) to match.

### Running it locally without Vite

After `npm run build`, `dist/` is a single self-contained `index.html` (CSS and JS inlined) plus the `images/` folder — serve it with any static file server:

```bash
npx serve dist
```

## Using it in a classroom

Each lesson page is a standalone activity — pick one to project, print, or assign without needing students to work through the others first. `How to Teach` walks through pacing and materials for facilitators; the K‑12 pathway pages (`K 1–4`, `K 5–8`, `K 9–12`) bundle related activities by age band if you want a ready-made sequence instead of choosing lessons individually.

## Contributing

- Do not import code or assets from `archive/` at runtime — treat it as an archive/time capsule.
- Add or update entries in `CHANGELOG.md` with an ISO 8601 timestamp for notable structural changes.
- Run `npm run build` before pushing changes (see rules in `GEMINI.md`).

## License

Dual-licensed:

- **Code** (everything under `src/` except the lesson text in `src/pages/`, plus `index.html`, `vite.config.js`, `eslint.config.js`) — [MIT](LICENSE).
- **Lesson content** (the activity instructions and explanations in `src/pages/`) — [CC BY 4.0](LICENSE-CONTENT). Use, adapt, and redistribute freely in your own classroom materials, with attribution.

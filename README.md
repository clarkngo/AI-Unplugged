# 🔌 AI Unplugged

An educational, kid-friendly site that teaches core AI concepts through unplugged, hands-on activities — no computer required for the activities themselves. Built with React + Vite, and designed to deploy as a single static page to GitHub Pages.

Live at: **https://clarkngo.github.io/AI-Unplugged/**

## What's in it

- [`src/lib/catalog.js`](src/lib/catalog.js) — **the single list of lessons and activities**: each activity's lesson page, grade bands, time, AI4K12 big ideas and printable. Home, Lessons, Activities, Big Ideas, the grade pathway pages and every activity header are generated from it. Add new activities here first.
- [`src/pages/`](src/pages/) — the seven lessons ([What is AI?](src/pages/WhatIsAI.jsx), [Machine Learning](src/pages/MachineLearning.jsx), [Computer Vision](src/pages/ComputerVision.jsx), [NLP](src/pages/NLP.jsx), [Generative AI](src/pages/GenerativeAI.jsx), [AI Ethics](src/pages/AIEthics.jsx), [Robotics](src/pages/Robotics.jsx)), each holding its activities; the browse pages ([Lessons](src/pages/Lessons.jsx), [Activities](src/pages/Activities.jsx) with grade and big-idea filters, [Big Ideas](src/pages/BigIdeas.jsx)); the grade pathways ([overview](src/pages/STEMK12.jsx), [K 1–4](src/pages/K1to4.jsx), [K 5–8](src/pages/K5to8.jsx), [K 9–12](src/pages/K9to12.jsx)) with printable lesson plans; [Printables](src/pages/Printables.jsx); [How to Teach](src/pages/HowToTeach.jsx); and [Credits](src/pages/Credits.jsx).
- [`src/components/`](src/components/) — shared layout (`NavBar`, `Header`, `Breadcrumbs`, `LessonPager`), catalog views (`ActivityHeader`, `ActivityCard`, `GradeActivities`), `LessonPlan`, the Hexapawn board diagram, and the printable activity materials.
- [`src/lib/`](src/lib/) — the logic behind the printables: Hexapawn move generation (which produces the matchbox cards), the Intelligent Paper rule sheet, the Next-Word Machine (and its Python listing), Pixel Pictures, the Biased Fruit Sorter cards, and the Story Dice faces. The printables are generated from this code, so they can't drift out of sync with the rules.
- [`src/App.jsx`](src/App.jsx) — route table and layout; uses `HashRouter` so deep links survive a refresh on static hosting. `?a=<id>` on any page scrolls to that activity, e.g. `#/nlp?a=next-word-python`.
- [`public/images/`](public/images/) — the face drawings used by the Computer Vision activity.
- [`archive/`](archive/) — the original static-HTML version of the site, kept for reference only. Nothing in the app imports from it.

Built with React 19, React Router 7, and Vite, with `vite-plugin-singlefile` inlining the production build — including the self-hosted fonts — into one `index.html`, so the site works offline once loaded.

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
- `npm run check` — content checks, also run in CI: every catalog entry points at a real page, anchor and printable; the claims lesson text makes about generated materials hold; and the Intelligent Paper rule sheet never loses at Tic-Tac-Toe (brute force over every game)

## Deploying it

### GitHub Pages

`vite.config.js` sets `base: '/AI-Unplugged/'` so built asset paths resolve under a project-pages subpath. Pushing to `main` lints, builds, and publishes via the workflow in [`.github/`](.github/); no manual deploy step is needed. Pull requests run the same lint and build without deploying. `dist/` is build output and is not committed.

If you fork this to a repo with a different name, update `base` in [`vite.config.js`](vite.config.js) to match.

### Running it locally without Vite

After `npm run build`, `dist/` is a single self-contained `index.html` (CSS and JS inlined) plus the `images/` folder — serve it with any static file server:

```bash
npx serve dist
```

## Using it in a classroom

Every activity stands alone — pick one to project, print, or assign without needing students to work through the others first. **Activities** lists them all with grade and big-idea filters (filtered views are shareable links); **Big Ideas** maps each one to the AI4K12 Five Big Ideas for standards alignment; the grade pathway pages (`K 1–4`, `K 5–8`, `K 9–12`) add printable lesson plans; and **Printables** has the cut-out cards and sheets. `How to Teach` covers pacing and materials.

## Contributing

- Do not import code or assets from `archive/` at runtime — treat it as an archive/time capsule.
- Add or update entries in `CHANGELOG.md` with an ISO 8601 timestamp for notable structural changes.
- Run `npm run build` before pushing changes (see rules in `GEMINI.md`).

## Credits

Sources and attributions for the activities are on the site's [Credits page](https://clarkngo.github.io/AI-Unplugged/#/credits) ([`src/pages/Credits.jsx`](src/pages/Credits.jsx)). All lesson text is original.

## License

Dual-licensed:

- **Code** (everything under `src/` except the lesson text in `src/pages/`, plus `index.html`, `vite.config.js`, `eslint.config.js`) — [MIT](LICENSE).
- **Lesson content** (the activity instructions and explanations in `src/pages/`) — [CC BY 4.0](LICENSE-CONTENT). Use, adapt, and redistribute freely in your own classroom materials, with attribution.

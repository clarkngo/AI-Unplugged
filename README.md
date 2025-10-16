# 🔌 AI Unplugged

An educational, kid-friendly site that teaches core AI concepts through unplugged, hands-on activities. Built with React + Vite and deployed to GitHub Pages.

## Features

- Hash-based routing for static hosting compatibility
- Modular pages and components (Home, What is AI, Machine Learning, Computer Vision, NLP, Generative AI, AI Ethics, Robotics)
- Public assets served from `public/images` with BASE_URL-aware paths
- Clean, centered design inspired by csunplugged.org

## Quick start

```sh
npm install
npm run dev
```

Open the local URL shown by Vite. The app uses `HashRouter`, so refreshes won’t 404 on static hosts.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build (required before push, see GEMINI.md)
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Deployment

The site is deployed via GitHub Pages. Vite `base` is set to `/AI-Unplugged/` to ensure asset paths resolve correctly in production. Pushing to `main` triggers the workflow.

## Contributing

- Do not import code or assets from `reference/` at runtime; treat it as an archive/time capsule
- Add or update entries in `CHANGELOG.md` with an ISO 8601 timestamp for notable changes
- Run `npm run build` before pushing changes (see rules in `GEMINI.md`)

## License

MIT

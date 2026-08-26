# Kelvin Smart — Portfolio

A production Tailwind CSS setup (no CDN warning, compiled CSS file) that
deploys automatically on both Netlify and GitHub Pages — no local build
step required for either.

## How it works

- `index.html` — the site markup. Loads its styling from `./dist/output.css`.
- `src/input.css` — the source stylesheet (`@tailwind` directives + custom CSS).
- `tailwind.config.js` — the design tokens (colors, fonts) Tailwind uses to
  generate the compiled CSS.
- `dist/output.css` — the **generated** file. It is not committed to Git
  (see `.gitignore`); it gets built fresh on every deploy.

## Deploying on Netlify

1. Push this folder to a GitHub repository.
2. In Netlify: **Add new site → Import an existing project**, and connect
   the repo.
3. Netlify reads `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `.` (repo root)
4. Netlify installs Tailwind, runs the build, and publishes the site.
   Every future push rebuilds it automatically.

No extra configuration needed — `netlify.toml` is already set up.

## Deploying on GitHub Pages

1. Push this folder to a GitHub repository, with the default branch named
   `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source**, choose
   **GitHub Actions** (one-time setup).
3. Push to `main`. The included workflow
   (`.github/workflows/deploy.yml`) will:
   - install Tailwind CSS
   - run `npm run build` to generate `dist/output.css`
   - deploy `index.html` + `dist/output.css` to GitHub Pages
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

Every future push to `main` re-runs this automatically.

## Local preview (optional)

You don't need Node locally to deploy — Netlify and GitHub Actions both
build the CSS for you. But if you want to preview changes on your own
machine before pushing:

```bash
npm install
npm run build      # builds once
# or
npm run watch       # rebuilds automatically as you edit src/input.css
```

Then open `index.html` directly in your browser (or use a local server /
the VS Code "Live Server" extension).

## Editing the site

- Content and layout: edit `index.html` directly — it uses standard
  Tailwind utility classes.
- Colors and fonts: edit `tailwind.config.js`.
- Custom CSS (animations, gradients, etc.): edit `src/input.css`.

Any time you add a new Tailwind class in `index.html` that wasn't used
before, the build step picks it up automatically — no manual class list to
maintain.

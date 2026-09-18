# Mahalaxmi Corporation — Website

Reconstructed React source (Create React App + CRACO + Tailwind CSS) for the
Mahalaxmi Corporation site, rebuilt from a captured production deploy.

## What's in this build

- The real `brand-mark.png` logo is now in `public/assets/`.
- Scroll-reveal animations (`src/components/site/Shared.jsx`) use Framer
  Motion's `useReducedMotion()` / `MotionConfig reducedMotion="user"`. This is
  **intentional, standard accessibility behavior**: if a visitor's OS/browser
  has "reduce motion" turned on, the animations are skipped by design and
  content just appears instantly. That's not a bug — see note below if you
  want to change it.
- Smooth scrolling via `lenis`, toasts via `sonner`, dialogs via
  `@radix-ui/react-dialog`.

## Setup

```bash
npm install
```

Fill in your real values in `.env` (currently set to sensible defaults):

```
REACT_APP_WHATSAPP_BASE_URL=https://wa.me
REACT_APP_MAPS_BASE_URL=https://www.google.com/maps/search/
```

## Local development

```bash
npm start
```

Opens at `http://localhost:3000`.

## Production build

```bash
npm run build
```

Outputs static files to `build/`.

## Deploy to Vercel via GitHub

1. Push this project to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: **Create React App** (Vercel should auto-detect this).
4. Build command / output directory are already set in `vercel.json`
   (`npm run build` → `build/`), so you shouldn't need to change anything.
5. Click **Deploy**.

## About the "no scroll animation" behavior

If you ever want animations to play regardless of a visitor's OS-level
"reduce motion" setting (not generally recommended — some visitors rely on
that setting for medical reasons), two changes would do it:

1. In `src/App.jsx`, remove `reducedMotion="user"` from `<MotionConfig>`.
2. In `src/components/site/Shared.jsx`, change the `Reveal` component's
   `initial` prop to always be `{ opacity: 0, y: 32 }` instead of
   `reduced ? false : {...}`.

## Notes

- This source was reconstructed from a browser capture of the deployed app
  (via webpack source maps), so some file formatting may differ slightly from
  the original, but functionality is preserved.
- If anything doesn't compile cleanly, it's most likely a dependency version
  mismatch — the `package.json` versions are best-effort reconstructions, not
  pulled from a lockfile, since none was available in the capture.

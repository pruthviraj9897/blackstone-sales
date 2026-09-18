# Mahalaxmi Corporation — Website (Static Build)

This is a self-contained static site: one `index.html` with all CSS, JS, and
images inlined. No build step, no dependencies, no `npm install` required.

> Note: this is the hand-built static preview version (not the original React
> source). It's fine for hosting as-is, but if you later want to go back to
> editing the real React project, use the separate project zip instead.

## Deploy to Vercel via GitHub

1. **Create a new GitHub repo** and push this folder to it:
   ```bash
   cd mahalaxmi-deploy
   git init
   git add .
   git commit -m "Initial static site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. **Import the repo into Vercel**:
   - Go to https://vercel.com/new
   - Select your GitHub repo
   - Framework preset: choose **"Other"** (this is plain static HTML, no framework)
   - Build command: leave **empty**
   - Output directory: leave as **default** (`.` / root) — `index.html` sits at the repo root
   - Click **Deploy**

That's it — Vercel will serve `index.html` directly with no build process.

## Local preview

Just open `index.html` in a browser, or run a quick local server:
```bash
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Custom domain

Once deployed, add your domain under Vercel → Project → Settings → Domains.

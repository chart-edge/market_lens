# Market Lens — GitHub Pages website

A responsive, dark editorial-style market insights website made with plain HTML, CSS, and JavaScript. No build tools or paid hosting are required.

## Files
- `index.html` — homepage, categories, market sections, disclaimer
- `style.css` — responsive styling
- `script.js` — article filters and mobile navigation
- `posts/` — three educational starter articles
- `assets/favicon.svg` — site icon

## Publish it using GitHub Pages
1. Sign in to https://github.com/
2. Create a **public** repository named `YOUR-USERNAME.github.io` (replace with your GitHub username).
3. Extract this ZIP and upload all files and folders into the repository root. Make sure `index.html` is at the root, not inside another folder.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select branch `main`, folder `/(root)`, and click **Save**.
7. Wait for the deployment to finish. Your personal site will usually be available at `https://YOUR-USERNAME.github.io/`.

Official GitHub instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Publish a new insight
For a simple manual workflow:
1. Create a new HTML file inside `posts/` by copying one of the starter articles and replacing its title/content.
2. Add a new `<article class="post-card" data-category="...">...</article>` block to the post grid in `index.html`. Use category `technical`, `risk`, or `journal`.
3. Commit your changes. GitHub Pages deploys the update automatically.

You can edit files directly on GitHub using **Add file → Create new file**; keep the `posts/` path in the filename.

## Before sharing
- Replace the sample articles with your own original insights.
- Do not represent the decorative chart as live market data.
- Keep the educational disclaimer visible.
- This static starter has no login, comments, database, live market feed, or private publishing dashboard.

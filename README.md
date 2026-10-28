# Market Lens — no-code publishing edition

Your existing responsive Market Lens website, upgraded to load articles from `content/posts.json` and support a browser-based publishing editor through Pages CMS. It still uses plain HTML, CSS, and JavaScript and can be hosted on GitHub Pages.

## What changed
- Added `.pages.yml` to configure Pages CMS.
- Added `content/posts.json` with the three starter articles.
- Added `article.html` so each insight has its own shareable article URL.
- The homepage loads published articles from the JSON file and filters by category.
- Added an optional chart screenshot field for each article.

## Upload the updated site to your existing GitHub repository
1. Extract this ZIP on your computer.
2. Open your existing repository: https://github.com/chart-edge/market_lens
3. Upload/replace the site files and folders in the repository root. Keep `index.html` in the root. Ensure `.pages.yml`, `article.html`, `content/posts.json`, and `media/` are included.
4. Commit the changes. GitHub Pages should redeploy automatically.

**Important:** Upload the contents of the `market_lens-main` folder, not the outer folder itself. Do not delete repository settings.

## Connect the no-code editor
1. Visit https://app.pagescms.org/ and sign in with the GitHub account that owns `chart-edge/market_lens`.
2. Install/authorize the Pages CMS GitHub App for this repository when prompted.
3. Open `chart-edge/market_lens` and choose the publishing branch (usually `main`).
4. Open the **Market analyses** collection. Add/edit a record with title, slug, date, category, summary, chart screenshot, analysis content, and published toggle.
5. Save/commit your changes. GitHub Pages updates the public website after deployment completes.

## Important publishing notes
- Use a unique slug such as `gold-analysis-2026-10-28` (lowercase letters and hyphens).
- The chart image should be your screenshot or an image you have permission to publish.
- Set **Show on public website** off to hide a post from the public list.
- Article text is plain text. Separate paragraphs with blank lines. A line written in ALL CAPS is styled as a section heading.
- The editor is a separate, sign-in protected dashboard. Readers do not need to log in to read the public website.
- This is not a live market data feed, and the website does not execute trades. Keep a clear educational disclaimer.

## Quick checks after publishing
- Homepage: https://chart-edge.github.io/market_lens/
- Editor: https://app.pagescms.org/
- Open an article card to check its detail page and chart image.

If you already have custom changes in your live repository, back up the repository before replacing files.

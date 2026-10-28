// Market Lens: static-site blog powered by content/posts.json (editable with Pages CMS).
const categoryLabels = { technical: "TECHNICAL ANALYSIS", risk: "RISK MANAGEMENT", journal: "TRADING JOURNAL" };
const safe = (value = "") => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const dateLabel = value => { const d = new Date(`${value}T12:00:00`); return Number.isNaN(d.getTime()) ? value : d.toLocaleDateString("en-US", {year:"numeric",month:"short",day:"numeric"}); };
function articleBody(text) {
  return String(text || "").trim().split(/\n\s*\n/).map(part => {
    const clean = safe(part).replace(/\n/g, "<br>");
    if (/^[A-Z0-9 ,:;()'’—-]{3,70}$/.test(part.trim()) && part.trim().length < 70) return `<h2>${clean}</h2>`;
    return `<p>${clean}</p>`;
  }).join("\n");
}
function card(post) {
  const image = post.chart_image ? `<img class="post-chart-image" src="${safe(post.chart_image)}" alt="Chart screenshot for ${safe(post.title)}" loading="lazy">` : `<div class="dynamic-art"><span>${safe(categoryLabels[post.category] || "MARKET INSIGHT")}</span><b>MARKET LENS</b><small>CONTEXT · STRUCTURE · RISK</small></div>`;
  return `<article class="post-card" data-category="${safe(post.category)}"><a href="article.html?slug=${encodeURIComponent(post.slug)}" class="post-art dynamic-post-art">${image}<span class="post-label">${safe(categoryLabels[post.category] || "MARKET INSIGHT")}</span></a><div class="post-body"><div class="post-meta">${safe(dateLabel(post.date))}<span>·</span> MARKET ANALYSIS</div><h3><a href="article.html?slug=${encodeURIComponent(post.slug)}">${safe(post.title)}</a></h3><p>${safe(post.excerpt)}</p><a class="read-more" href="article.html?slug=${encodeURIComponent(post.slug)}">Read the insight <span>→</span></a></div></article>`;
}
async function loadPosts() {
  try {
    const response = await fetch("content/posts.json", {cache:"no-store"});
    if (!response.ok) throw new Error("Could not load article data");
    const posts = (await response.json()).filter(p => p.published !== false).sort((a,b) => String(b.date).localeCompare(String(a.date)));
    const grid = document.querySelector(".post-grid");
    if (grid) {
      grid.innerHTML = posts.length ? posts.map(card).join("") : '<p class="loading-posts">No published insights yet. Check back soon.</p>';
      const count = document.getElementById("allCount"); if (count) count.textContent = String(posts.length).padStart(2,"0");
      const buttons = document.querySelectorAll(".filter");
      buttons.forEach(button => button.addEventListener("click", () => {
        buttons.forEach(item => item.classList.remove("active")); button.classList.add("active");
        const selected = button.dataset.filter;
        grid.querySelectorAll(".post-card").forEach(item => { item.hidden = selected !== "all" && item.dataset.category !== selected; });
      }));
    }
    const articleRoot = document.getElementById("dynamicArticle");
    if (articleRoot) {
      const slug = new URLSearchParams(location.search).get("slug");
      const post = posts.find(p => p.slug === slug);
      if (!post) { articleRoot.innerHTML = '<h1>Insight not found</h1><p>This article may have been unpublished or the link may be incorrect.</p><a class="article-back" href="index.html#insights">← BACK TO ALL INSIGHTS</a>'; return; }
      document.title = `${post.title} | Market Lens`;
      const img = post.chart_image ? `<figure class="article-chart"><img src="${safe(post.chart_image)}" alt="Chart screenshot for ${safe(post.title)}"><figcaption>Chart shared for educational discussion.</figcaption></figure>` : "";
      articleRoot.innerHTML = `<a class="article-back" href="index.html#insights">← BACK TO ALL INSIGHTS</a><p class="article-label">${safe(categoryLabels[post.category] || "MARKET INSIGHT")} · ${safe(dateLabel(post.date))}</p><h1>${safe(post.title)}</h1><p class="lede">${safe(post.excerpt)}</p>${img}<div class="article-body">${articleBody(post.body)}</div><div class="article-callout">Educational content only. This is not financial advice or a recommendation to buy or sell any instrument. Trading involves risk.</div><p><a class="article-back" href="index.html#insights">← RETURN TO MARKET LENS</a></p>`;
    }
  } catch (error) {
    const grid = document.querySelector(".post-grid");
    if (grid) grid.innerHTML = '<p class="loading-posts">Articles could not be loaded. Please refresh the page in a moment.</p>';
    console.error(error);
  }
}
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => { const isOpen = nav.classList.toggle("open"); menuToggle.setAttribute("aria-expanded", String(isOpen)); });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); }));
}
loadPosts();

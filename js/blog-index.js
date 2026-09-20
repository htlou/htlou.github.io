document.addEventListener('DOMContentLoaded', async () => {
  const listEl = document.querySelector('.blog-list');
  if (!listEl) return;

  try {
    const res = await fetch('blogs/index.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to load blog index: ${res.status}`);
    const posts = await res.json();

    // Sort by date desc
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    const escapeHtml = value => String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

    // Render each post card, including externally published writing.
    listEl.innerHTML = posts.map(p => {
      const date = p.displayDate || new Date(`${p.date}T12:00:00`).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
      const href = p.url || `blogs/${p.slug}.html`;
      const target = p.external ? ' target="_blank" rel="noopener"' : '';
      const externalIcon = p.external ? ' <i class="fas fa-arrow-up-right-from-square" aria-label="External post"></i>' : '';
      const cover = p.cover ? `<img src="${escapeHtml(p.cover)}" alt="${escapeHtml(p.title)}" class="blog-thumbnail" />` : '';
      return `
        <article class="blog-item${p.cover ? '' : ' blog-item--text'}">
          ${cover}
          <div class="blog-content">
            <div class="blog-tags"><span class="blog-tag">${escapeHtml(p.tag)}</span></div>
            <h2 class="blog-title"><a href="${escapeHtml(href)}"${target}>${escapeHtml(p.title)}${externalIcon}</a></h2>
            <div class="blog-date">${escapeHtml(date)}</div>
            ${p.excerpt ? `<p class="blog-excerpt">${escapeHtml(p.excerpt)}</p>` : ''}
          </div>
        </article>
      `;
    }).join('');
  } catch (err) {
    console.error(err);
    listEl.innerHTML = '<p>Failed to load blog posts. Please try again later.</p>';
  }
});

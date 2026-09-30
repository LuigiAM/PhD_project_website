import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

// Sitemap lastmod must reflect real content changes, or Google learns to ignore it.
// - Newsletter issues: the date in their frontmatter; the archive: the newest issue.
// - Every other page: the last commit that touched its source file
//   (deploy.yml checks out the full history so this works in CI).
// - No reliable date (e.g. an uncommitted page): no lastmod at all. Never the build date.
const NEWSLETTER_DIR = 'src/content/newsletter';
const newsletterDates = Object.fromEntries(
  fs
    .readdirSync(NEWSLETTER_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const text = fs.readFileSync(path.join(NEWSLETTER_DIR, f), 'utf8');
      return [f.replace(/\.md$/, ''), text.match(/^date:\s*['"]?(\d{4}-\d{2}-\d{2})/m)?.[1]];
    })
    .filter(([, date]) => date)
);
const latestNewsletter = Object.values(newsletterDates).sort().at(-1);

/** Newest commit date (ISO) across the given files, or undefined if none is committed. */
function gitDate(...files) {
  const stamps = files
    .filter((f) => fs.existsSync(f))
    .map((f) => {
      try {
        return Number(execFileSync('git', ['log', '-1', '--format=%ct', '--', f], { encoding: 'utf8' }).trim());
      } catch {
        return 0;
      }
    })
    .filter(Boolean);
  return stamps.length ? new Date(Math.max(...stamps) * 1000).toISOString() : undefined;
}

function lastmodFor(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'newsletter') return parts[1] ? newsletterDates[parts[1]] : latestNewsletter;
  if (parts[0] === 'research' && parts[1] === 'publications' && parts[2]) {
    return gitDate('src/data/publications.ts', 'src/pages/research/publications/[slug].astro');
  }
  const base = path.join('src/pages', ...parts);
  return gitDate(`${base}.astro`, path.join(base, 'index.astro'));
}

export default defineConfig({
  site: 'https://memopad.luigiandreamoretti.com',

  integrations: [
    // No changefreq/priority: Google ignores both.
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const lastmod = lastmodFor(new URL(item.url).pathname);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
});

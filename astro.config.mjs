import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://memopad.luigiandreamoretti.com',

  integrations: [
    // No lastmod/changefreq/priority: Google ignores changefreq and priority,
    // and a lastmod set to the build date on every URL teaches it to ignore lastmod too.
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});

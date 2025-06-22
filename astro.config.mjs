import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // The full URL where your website will live.
  // No slash at the end.
  site: 'https://LuigiAM.github.io',

  // The name of the repository, starting with a slash.
  // This tells Astro to add this prefix to all internal links.
  base: '/PhD_project_website',

  integrations: [sitemap()],
});
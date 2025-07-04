import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // UPDATED: This is now your new custom subdomain URL.
  site: 'https://memopad.luigiandreamoretti.com',

  // REMOVED: The 'base' property is no longer needed because
  // you are deploying to the root of a domain, not a subdirectory.
  
  integrations: [sitemap()]
});

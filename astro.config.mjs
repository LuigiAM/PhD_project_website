import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://memopad.luigiandreamoretti.com',
  
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      
      // Optional: Custom priorities per page type
      serialize(item) {
        // Homepage gets highest priority
        if (item.url === 'https://memopad.luigiandreamoretti.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Main pages
        else if (
          item.url.includes('/research/') ||
          item.url.includes('/achievements/') ||
          item.url.includes('/project-story/')
        ) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        // Newsletter archive
        else if (item.url === 'https://memopad.luigiandreamoretti.com/newsletter/') {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Individual newsletters
        else if (item.url.includes('/newsletter/')) {
          item.priority = 0.6;
          item.changefreq = 'never'; // Old posts don't change
        }
        // Privacy/contact
        else if (item.url.includes('/privacy/') || item.url.includes('/contact/')) {
          item.priority = 0.4;
          item.changefreq = 'yearly';
        }
        
        return item;
      }
    })
  ]
});
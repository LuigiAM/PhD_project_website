// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const newsletter = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/newsletter' }),
  schema: z.object({
    // Descriptive headline, used for <title>, <h1> and cards
    title: z.string(),
    // The month the issue covers, e.g. 'August 2026'
    issue: z.string(),
    // Date the issue was sent (ISO, YYYY-MM-DD)
    date: z.coerce.date(),
    description: z.string(),
  }),
});

export const collections = { newsletter };

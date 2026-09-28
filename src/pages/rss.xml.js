// src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('newsletter')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: 'MEMoPAD Newsletter',
    description: 'Monthly updates from MEMoPAD, a PhD project co-designing wearable emotion monitoring for anxiety disorders.',
    site: context.site,
    items: posts.map((post) => ({
      title: `${post.data.title} (${post.data.issue})`,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/newsletter/${post.id}/`,
    })),
    customData: '<language>en-gb</language>',
  });
}

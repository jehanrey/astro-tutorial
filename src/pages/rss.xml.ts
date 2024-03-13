import rss, { pagesGlobToRssItems, type RSSFeedItem } from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site as URL,
    items: (await pagesGlobToRssItems(
      import.meta.glob('./**/*.md')
    )) as Array<RSSFeedItem>,
    customData: `<language>en-us</language>`,
  });
}

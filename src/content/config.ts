import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    author: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string().url(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  posts: postsCollection,
};
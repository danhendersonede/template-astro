import { defineCollection, z } from 'astro:content';

const typesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
  }),
});

export const collections = {
  types: typesCollection,
};

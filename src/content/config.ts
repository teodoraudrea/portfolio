import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str)), // Ensures dates are properly parsed
    author: z.string(),
  }),
});

export const collections = {
  blog,
};

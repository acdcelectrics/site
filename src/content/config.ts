// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('ACDC Electricals'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const productsCollection = defineCollection({
  schema: ({image}) => z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: image(),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('ACDC Electricals'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  // ensure the key matches the directory name
  blog: blogCollection,
  products: productsCollection,
};
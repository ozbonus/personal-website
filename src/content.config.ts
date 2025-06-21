import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md*', base: "./src/blog" }),
  schema: ({ image }) => z.object({
    title: z.string().max(72, {
      message: "Title must be 72 characters or fewer."
    }),
    description: z.string().max(128, {
      message: "Title must be 128 characters or fewer."
    }),
    pubDate: z.date(),
    editDate: z.date().optional(),
    author: z.string(),
    cover: image(),
    alt: z.string(),
    tags: z.array(z.string()),
    keywords: z.array(z.string()),
  })
});

export const collections = { posts };
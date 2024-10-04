import { defineCollection, z } from "astro:content";

const article = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      malayalamTitle: z.string(),
      description: z.string(),
      summary: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      tags: z.array(z.string()),
      popularPost: z.boolean().default(false).optional(),
      coverImage: image().optional(),
      coverAlt: z.string().default("No Alt Specified").optional(),
      draft: z.boolean().default(false).optional(),
    }),
});

export const collections = { article };

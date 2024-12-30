import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const article = defineCollection({
    loader: glob({ base: './src/content/article', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            malayalamTitle: z.string(),
            description: z.string(),
            summary: z.string(),
            // pubDate: z.string().transform((str) => new Date(str)),
            pubDate: z.coerce.date(),
            tags: z.array(z.string()),
            popularPost: z.boolean().default(false).optional(),
            coverImage: image(),
            coverAlt: z.string().default("No Alt Specified"),
            draft: z.boolean().default(false).optional(),
        }),
});

export const collections = { article };

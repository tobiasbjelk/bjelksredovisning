import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const tjanster = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/tjanster" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const site = defineCollection({
  loader: file("./src/data/site.json"),
  schema: z.object({
    id: z.string(),
    hero: z
      .object({
        heading: z.string(),
        tagline: z.string(),
      })
      .optional(),
    about: z
      .object({
        heading: z.string(),
        text: z.string(),
      })
      .optional(),
    contact: z
      .object({
        heading: z.string(),
        phone: z.string(),
        email: z.string(),
        address: z.string(),
      })
      .optional(),
  }),
});

export const collections = { tjanster, site };

import { defineCollection } from "astro/content/runtime";
import { z } from "astro:content";

const jobs = defineCollection({
    type:"content",
    schema: z.object({
        title: z.string(),
        lan: z.string()
    })
})

export const collections = { jobs }

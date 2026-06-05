import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: 'pages/**/*.md',
    }),
    articles: defineCollection({
      type: 'page',
      source: 'articles/**/*.md',
      schema: z.object({
        date: z.string(),
      }),
    }),
  },
})

import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    site: defineCollection({
      type: 'data',
      source: 'site.yaml',
      schema: z.object({
        name: z.string(),
        seo: z.object({
          title: z.string(),
          description: z.string(),
        }),
        navigation: z.object({
          header: z.array(z.object({
            label: z.string(), // philosophy
            to: z.string(), // e.g. "/philosophy"
            external: z.boolean(), // true
            target: z.string(), // e.g. "_blank"
          })),
        }),
      })
    }),
    home: defineCollection({
      type: 'data',
      source: 'home.yaml',
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string().optional(),
          actions: z.array(z.object({
            label: z.string(),
            to: z.string(),
            color: z.string(),
          })),
        }),
        sections: z.array(z.object({
          id: z.string(),
          title: z.string(),
          description: z.string().optional(),
          separator: z.string(),
        })),
      }),
    }),
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
  },
})

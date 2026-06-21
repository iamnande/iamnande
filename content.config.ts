import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

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
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
    }),
    pages: defineCollection({
      type: 'page',
      source: '*.md', 
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/**/*.md',
    }),
  },
})

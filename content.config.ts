import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    site: defineCollection({
      type: 'data',
      source: 'site.yaml',
      schema: z.object({
        name: z.string(),
        tagline: z.string(),
        contact: z.object({
          email: z.string(),
          github: z.string(),
          linkedin: z.string(),
        }),
        nav: z.object({
          items: z.record(z.string(), z.object({
            title: z.string(), // philosophy
            path: z.string().optional(), // e.g. "/philosophy"
            url: z.string().optional(), // e.g. "https://foo.philosophy"
            hidden: z.boolean(), // true
            comingSoon: z.boolean(), // true
          })),
          header: z.array(z.string()),
          footer: z.object({
            columns: z.array(z.object({
              label: z.string(),
              items: z.array(z.string()),
            })),
          }),
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

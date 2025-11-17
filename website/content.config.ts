import { defineCollection, defineContentConfig, z } from "@nuxt/content";

const createBaseSchema = () =>
  z.object({
    title: z.string(),
    description: z.string(),
  });

const createButtonSchema = () =>
  z.object({
    label: z.string(),
    icon: z.string().optional(),
    to: z.string().optional(),
    color: z
      .enum(["primary", "neutral", "success", "warning", "error", "info"])
      .optional(),
    size: z.enum(["xs", "sm", "md", "lg", "xl"]).optional(),
    variant: z
      .enum(["solid", "outline", "subtle", "soft", "ghost", "link"])
      .optional(),
    target: z.enum(["_blank", "_self"]).optional(),
  });

const createImageSchema = () =>
  z.object({
    src: z.string().editor({ input: "media" }),
    alt: z.string(),
  });


export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: "page",
      source: "index.yml",
      schema: z.object({
        hero: z.object({
          links: z.array(createButtonSchema()),
          images: z.array(createImageSchema()).optional(),
        }),
        about: createBaseSchema(),
        experience: createBaseSchema().extend({
          items: z.array(
            z.object({
              date: z.date(),
              position: z.string(),
              company: z.object({
                name: z.string(),
                url: z.string(),
                logo: z.string().editor({ input: "icon" }),
                color: z.string(),
              }),
            }),
          ),
        }),
      }),
    }),
    /*
 * projects: defineCollection({
      type: "data",
      source: "projects/*.yml",
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        image: z.string().nonempty().editor({ input: "media" }),
        url: z.string().nonempty(),
        tags: z.array(z.string()),
        date: z.date(),
      }),
    }),
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        minRead: z.number(),
        date: z.date(),
        image: z.string().nonempty().editor({ input: "media" }),
        author: createAuthorSchema(),
      }),
    }),
*/
    about: defineCollection({
      type: "page",
      source: "about.yml",
      schema: z.object({
        content: z.object({}),
        images: z.array(createImageSchema()),
      }),
    }),
  },
});

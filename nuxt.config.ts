export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/content'],

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },
})

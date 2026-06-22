import { useState } from "nuxt/app"
import type { MHQSiteConfig } from "../types/site"

export const useSite = () => {
  const site = useState<MHQSiteConfig>('site')

  const loadSite = async () => {
    const siteConfig = await queryCollection('site').first() as any
    if (!siteConfig) {
      throw new Error("failed to load site config")
    }
    
    site.value = {
      name: siteConfig.name,
      tagline: siteConfig.tagline,
      contact: siteConfig.contact,
      nav: siteConfig.nav,
    } satisfies MHQSiteConfig

    return site.value
  }

  const safeSite = computed(() => {
    if (!site.value) {
      throw new Error("failed to load site config")
    }
    return site.value
  })

  return {
    site: safeSite,
    loadSite,
  }
}

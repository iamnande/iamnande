import type { MHQContactInfo } from "./contact"
import type { MHQNavItem } from "./nav-item"

export interface MHQSiteConfig {
  name: string
  tagline: string

  contact: MHQContactInfo

  // TODO: we need to type-ify the nav setup better
  // it should feel organic to place nav items
  nav: {
    items: Record<string, MHQNavItem>
    header: string[]
    footer: {
      columns: {
        label: string
        items: string[]
      }[]
    }
  },
}

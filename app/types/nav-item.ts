export interface MHQNavItem {
  title: string
  
  // either path, or URL - not both
  path?: string
  url?: string
  external?: boolean

  // if hidden && comingSoon == show coming soon
  hidden?: boolean
  comingSoon?: boolean

  icon?: string
}

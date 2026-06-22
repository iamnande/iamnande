import type { MHQNavItem } from "../types/nav-item"

const toNuxtNav = (item: MHQNavItem) => ({
  label: item.title,
  to: item.external ? undefined : item.path,
  href: item.external ? item.url : undefined,
  target: item.external ? '_blank' : undefined,
  external: item.external,
  icon: item.icon,
})

export const useSiteNav = () => {
  const { site } = useSite()

  const isNavItem = (
    item: MHQNavItem | undefined
  ): item is MHQNavItem => !!item

  const resolve = (keys: string[]) => {
    return keys
      .map(key => site.value.nav.items[key])
      .filter(isNavItem)
      .map(toNuxtNav)
  }

  const headerNav = computed(() =>
    resolve(site.value.nav.header)
  )

  const footerNav = computed(() =>
    site.value.nav.footer.columns.map(column => ({
      label: column.label,
      children: column.items
        .map(key => site.value.nav.items[key])
        .filter(isNavItem)
        .map(toNuxtNav)
    }))
  )

  return {
    headerNav,
    footerNav,
    resolve,
  }
}

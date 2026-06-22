import type { MHQContactInfo } from "~/types/contact"

export const useContact = () => {
  const { site } = useSite()

  return computed<MHQContactInfo>(() => site.value.contact)
}

import type { MHQSocialLink } from "~/types/contact"

export const useSocials = () => {
  const contact = useContact()

  return computed<MHQSocialLink[]>(() => [
    {
      label: 'github',
      href: `https://github.com/${contact.value.github}`,
      icon: 'i-simple-icons-github',
    },
    {
      label: 'linkedin',
      href: `https://linkedin.com/in/${contact.value.linkedin}`,
      icon: 'i-simple-icons-linkedin',
    }
  ])
}

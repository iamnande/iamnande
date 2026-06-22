<script setup lang="ts">
const { site } = useSite()
const { headerNav, footerNav } = useSiteNav()
const contact = useContact()
const socials = useSocials()

const creepOnMyCode = `https://github.com/${contact.value.github}`

console.log("HEADER NAV: ", headerNav)
</script>

<template>
  <!-- TODO: move this to a component [title, nav, ref new code component] -->
  <UHeader :title="site.name">
    <UNavigationMenu :items="headerNav" />

    <template #right>
      <!-- TODO: move this to a component, take computed code with it -->
      <UTooltip text="view the source" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          target="_blank"
          :to="creepOnMyCode"
          icon="i-simple-icons-github"
          aria-label="view source"
        />
      </UTooltip>
    </template>
  </UHeader>

  <slot />

  <MHQFooter
    :nav="footerNav"
    :tagline="site.tagline"
    :contact="contact"
    :socials="socials"
  />
</template>

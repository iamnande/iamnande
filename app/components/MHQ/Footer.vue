<script lang="ts" setup>
interface Props {
  nav: FooterColumn[]
  tagline: string
  contact: MHQContactInfo
  socials: MHQSocialLink[]
}

const props = defineProps<Props>()
</script>

<template>
  <UFooter class="text-dimmed">
    <template #top>
      <UContainer>
        <UFooterColumns
          :columns="props.nav"
        >
          <template #right>
            <div class="flex flex-col items-end gap-4">
              <p class="text-dimmed">{{ props.tagline }}</p>

              <UButton
                icon="i-lucide-mail"
                size="md"
                color="primary"
                variant="subtle"
                aria-label="contact"
                :to="`mailto:${props.contact.email}`"
              >
                contact me
              </UButton>

              <div class="flex gap-2">
                <UButton
                  v-for="social in socials"
                  :key="social.label"
                  :icon="social.icon"
                  size="md"
                  color="neutral"
                  variant="subtle"
                  :aria-label="social.label"
                  :to="social.href"
                  target="_blank"
                />
              </div>
            </div>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>
  </UFooter>
</template>

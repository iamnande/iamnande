<script lang="ts" setup>
const columns: FooterColumn[] = [
  {
    label: 'nick anderson',
    children: [
      {
        label: 'philosophy',
        to: '/philosophy',
      },
      {
        label: 'colophon',
        to: 'https://github.com/iamnande/iamnande/discussions/13',
        external: true,
        target: '_blank',
      },
    ],
  },
]
</script>

<template>
  <UFooter class="text-dimmed">
    <template #top>
      <UContainer>
        <UFooterColumns
          :columns="columns"
        >
          <template #right>
            <div class="flex flex-col items-end gap-4">
              <p class="text-dimmed">
                building systems between systems.
              </p>

              <UButton
                icon="i-lucide-mail"
                size="md"
                color="primary"
                variant="subtle"
                aria-label="contact"
              >
                contact me
              </UButton>

              <div class="flex gap-2">
                <UButton
                  icon="i-simple-icons-github"
                  size="md"
                  target="_blank"
                  color="neutral"
                  variant="subtle"
                  aria-label="github"
                />
                <UButton
                  icon="i-simple-icons-linkedin"
                  size="md"
                  color="neutral"
                  variant="subtle"
                  aria-label="linkedin"
                />
              </div>
            </div>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>
  </UFooter>
</template>

<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { footer, global } = useAppConfig()

const hardwareLinks = ref<PageLink[]>([
  {
    label: 'Workstation',
    icon: 'i-lucide-laptop',
    to: 'https://github.com/nuxt/ui/blob/v4/docs/content/3.components/page-links.md'
  },
  {
    label: 'Star on GitHub',
    icon: 'i-lucide-star',
    to: 'https://github.com/nuxt/ui'
  },
  {
    label: 'Releases',
    icon: 'i-lucide-rocket',
    to: 'https://github.com/nuxt/ui/releases'
  }
])

defineProps<{
    page: IndexCollectionItem
}>()
</script>

<template>
    <UPageHero
        orientation="horizontal"
    >
        <template #title>
            <Motion
                :initial="{
                    scale: 1.1,
                    opacity: 0,
                    filter: 'blur(20px)'
                }"
                :animate="{
                    scale: 1,
                    opacity: 1,
                    filter: 'blur(0px)'
                }"
                :transition="{
                    duration: 0.6,
                    delay: 0.1
                }"
                class="text-neutral"
            >
                {{ page.title }}
            </Motion>
        </template>

        <template #description>
            <Motion
                :initial="{
                    scale: 1.1,
                    opacity: 0,
                    filter: 'blur(20px)'
                }"
                :animate="{
                    scale: 1,
                    opacity: 1,
                    filter: 'blur(0px)'
                }"
                :transition="{
                    duration: 0.6,
                    delay: 0.3
                }"
                class="text-gray-100"
            >
                {{ page.description }}
            </Motion>
        </template>

        <img
            src="/profesh.jpg"
            alt="App screenshot"
            class="w-90 h-auto mx-auto rounded-4xl grayscale-25 drop-shadow-xl rotate-2 shadow-2xl ring ring-default"
        />

        <template #links>
            <Motion
                :initial="{
                    scale: 1.1,
                    opacity: 0,
                    filter: 'blur(20px)'
                }"
                :animate="{
                    scale: 1,
                    opacity: 1,
                    filter: 'blur(0px)'
                }"
                :transition="{
                    duration: 0.6,
                    delay: 0.5
                }"
            >
                <div class="flex items-center gap-10">
                    <UButton
                        icon="i-lucide-linkedin"
                        variant="solid"
                        size="lg"
                        color="primary"
                        class="py-4"
                    >
                        Let's Connect!
                    </UButton>
                    <USlideover
                        title="My Dev Setup"
                        description="Hardware, software, and everything between."
                        :close="{
                            color: 'primary',
                            variant: 'outline',
                            class: 'rounded-full'
                        }"
                    >
                        <UButton
                            label="My Dev Setup"
                            icon="i-lucide-code"
                            variant="subtle"
                            size="lg"
                            color="primary"
                            class="py-4"
                        />

                        <template #body>
                            <UPageList>
                                <h3 class="my-2">Hardware</h3>
                                <USeparator />
                                <UPageCard
                                    v-for="(link, index) in hardwareLinks"
                                    :key="index"
                                    variant="ghost"
                                    :to="link.to"
                                    :target="link.target"
                                >
                                    <template #body>
                                        <UUser name="Workstation" description='Macbook Air 13", M4, 2025' />
                                    </template>
                                </UPageCard>
                            </UPageList>
                        </template>
                    </USlideover>
                </div>
            </Motion>
        </template>
    </UPageHero>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
    links: NavigationMenuItem[]
}>()
</script>

<template>
    <UHeader>
        <template #title>
            <NuxtLink to="/">
                <UBadge icon="i-lucide-skull" size="xl">MHQ</UBadge>
            </NuxtLink>
        </template>

        <UNavigationMenu
            :items="links"
        />

        <template #right>
            <ColorModeButton />
        </template>
    </UHeader>
</template>

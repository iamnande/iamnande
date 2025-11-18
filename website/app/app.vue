<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#211b34' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: '%s',
  ogImage: 'https://avatars.githubusercontent.com/u/7806510?v=4?s=400',
})
</script>

<template>
    <UApp>
        <NuxtLayout>
            <UMain>
                <NuxtPage />
            </UMain>
        </NuxtLayout>
    </UApp>
</template>

<style scoped lang="css">
</style>

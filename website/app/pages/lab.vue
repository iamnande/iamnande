<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})
</script>

<template>
    <UPage v-if="page">
        <UPageHeader
            :title="page.title"
            :description="page.description"
        />
        <UPageSection
            :title="page.about.title"
            :description="page.about.description"
            icon="i-lucide-user"
            variant="soft"
        >
        </UPageSection>
        <UPageBody />
    </UPage>
</template>


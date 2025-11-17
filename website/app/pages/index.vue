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
        <LandingHero :page />

        <USeparator color="primary" icon="i-simple-icons-skeleton" />
        <UPageSection
            :title="page.about.title"
            :description="page.about.description"
            icon="i-lucide-circle-user-round"
            variant="soft"
        />

        <USeparator color="primary" icon="i-simple-icons-skeleton" />
        <UPageSection
            :title="page.experience.title"
            :description="page.experience.description"
            icon="i-lucide-briefcase-business"
            variant="soft"
        >
            <template #body>
                <UTimeline
                    color="primary"
                    :default-value="3"
                    size="3xl"
                    :ui="{
                        root: 'flex flex-col items-center justify-center'
                    }"
                    :items="page.experience.items.map(experience => ({
                        date: experience.date,
                        title: experience.position,
                        description: experience.company.name,
                        icon: experience.company.logo
                    }))"
                />
            </template>
        </UPageSection>
        <!--LandingSetup :page /-->
    </UPage>
</template>

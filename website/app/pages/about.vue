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

const items = ref([
  {
    date: '2025 to Present',
    title: 'Senior Software Engineer - ngrok',
    description: 'Peace be the journey.',
    icon: 'i-simple-icons-ngrok'
  },
  {
    date: '2022 to 2025',
    title: 'Senior Software Engineer - Kong, Inc.',
    description: 'Peace be the journey.',
    icon: 'i-simple-icons-kong'
  },
  {
    date: '2014 to 2022',
    title: 'Lead Software Engineer - Nike, Inc.',
    description: 'Peace be the journey.',
    icon: 'i-simple-icons-nike'
  },
  {
    date: '2012 to 2024',
    title: 'Software Engineer - US Bank, Inc.',
    description: 'Peace be the journey.',
    icon: 'i-simple-icons-bankofamerica'
  },
])
</script>

<template>
    <UPage v-if="page">
        <UContainer class="py-12">

            <!-- Bio Section -->
            <div class="flex flex-col md:flex-row md:items-start md:gap-8">
                <!-- Photo -->
                <div class="flex-shrink-0 mb-6 md:mb-0">
                    <img
                        src="/me.png"
                        alt="Nick"
                        class="rounded-xl -rotate-2 w-76 mb-10"
                    />

                    <div class="flex flex-row gap-8">
                        <UButton
                            icon="i-lucide-github"
                            size="xl"
                            color="primary"
                            variant="subtle"
                            to="/"
                        />
                        <UButton
                            icon="i-lucide-linkedin"
                            size="xl"
                            color="primary"
                            variant="subtle"
                            to="/"
                        />
                    </div>
                </div>

                <!-- Bio Text -->
                <div class="prose max-w-none">
                    <h1 class="text-4xl font-bold mb-4">About Nick</h1>
                    <p>
                        Hey, I’m Nick. I’m a Senior Software Engineer with a passion for
                        building scalable, high-performance backend systems. I focus on
                        distributed systems, platform services, and enabling other teams to
                        move fast.
                    </p>
                    <p>
                        Over the last decade, I’ve worked on identity & access management,
                        developer tooling, and infrastructure that lets engineers focus on
                        delivering value.
                    </p>
                    <p class="mt-10">
                        Hey, I’m Nick. I’m a Senior Software Engineer with a passion for
                        building scalable, high-performance backend systems. I focus on
                        distributed systems, platform services, and enabling other teams to
                        move fast.
                    </p>
                    <p>
                        Over the last decade, I’ve worked on identity & access management,
                        developer tooling, and infrastructure that lets engineers focus on
                        delivering value.
                    </p>
                </div>
            </div>

            <!-- Separator -->
            <div class="my-12">
                <USeparator
                    color="primary"
                    icon="i-simple-icons-skeleton"
                />
            </div>

            <!-- Skills & Experience Section -->
            <div class="flex flex-col md:flex-row md:gap-12">
                <!-- Skills (Left) -->
                <div class="flex-1">
                    <h2 class="mt-10 mb-15 text-center text-2xl">Skills & Technology</h2>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-10">
                        <UIcon
                            name="i-simple-icons-go"
                            class="size-20 mx-auto"
                        />
                        <UIcon
                            name="i-simple-icons-kubernetes"
                            class="size-15 mx-auto"
                        />
                        <UIcon
                            name="i-simple-icons-apachekafka"
                            class="size-15 mx-auto"
                        />
                        <UIcon
                            name="i-simple-icons-argo"
                            class="size-15 mx-auto"
                        />
                        <UIcon
                            name="i-simple-icons-postgresql"
                            class="size-15 mx-auto"
                        />
                        <UIcon
                            name="i-simple-icons-typescript"
                            class="size-15 mx-auto"
                        />
                    </div>
                </div>

                <!-- Vertical Separator -->
                <div class="hidden md:flex items-center justify-center">
                    <div class="h-full">
                        <USeparator
                            color="primary"
                            icon="i-simple-icons-skeleton"
                            orientation="vertical"
                        />
                    </div>
                </div>

                <!-- Experience (Right) -->
                <div class="flex-1">
                    <h2 class="mt-10 mb-15 text-center text-2xl">Work Experience</h2>
                    <UTimeline
                        reverse
                        size="xl"
                        class="ml-10"
                        :items="items"
                    />
                </div>
            </div>

        </UContainer>
    </UPage>
</template>


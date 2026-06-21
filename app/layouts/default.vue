<script setup lang="ts">
const { data: site } = await useAsyncData("site", () => {
  return queryCollection("site").first();
});

const page = {
  title: site?.seo?.title ?? "nick anderson",
  description: site?.seo?.description ?? "iamnande",
};

useSeoMeta({
  title: page.title,
  ogTitle: page.title,
  description: page.description,
  ogDescription: page.description,
});
</script>

<template>
  <UHeader :title="page.title">
    <UNavigationMenu :items="site.navigation.header" />

    <template #right>
      <UTooltip text="view the source" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/iamnande/iamnande"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="github"
        />
      </UTooltip>
    </template>
  </UHeader>

  <slot />

  <MHQFooter />
</template>

<script lang="ts" setup>
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("pages").path(route.path).first()
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "woops. shrimp not found.",
    fatal: true,
  });
}
</script>

<template>
  <UContainer class="py-12">
    <ContentRenderer :value="page" />
  </UContainer>
</template>

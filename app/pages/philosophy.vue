<script setup lang="ts">
const { data: page } = await useAsyncData('philosophy', () =>
  queryCollection('pages').path('/pages/philosophy').first()
)
</script>

<template>
  <div class="max-w-5xl mx-auto px-8 py-32">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>

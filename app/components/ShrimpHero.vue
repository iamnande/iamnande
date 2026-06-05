<script setup lang="ts">
const config = useAppConfig()
</script>

<template>
  <section class="min-h-[calc(100vh-5rem)] flex flex-col justify-center">
    <blockquote class="font-mono text-4xl text-fg pb-3">{{ config.profile.tagline }}</blockquote>
    <p class="font-mono text-sm text-fg/60 pb-6">{{ config.profile.subheading }}</p>
    <a href="#contact" class="font-mono text-sm text-accent hover:text-fg transition-colors">{{ config.profile.cta }}</a>
  </section>
</template>

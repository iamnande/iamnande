<script setup lang="ts">
const config = useAppConfig()
</script>

<template>
  <section class="min-h-[calc(100vh-5rem)] flex flex-col justify-center hero-stagger">
    <blockquote class="font-mono text-4xl text-fg pb-3 fade-up">{{ config.profile.tagline }}</blockquote>
    <p class="font-mono text-sm text-fg/60 pb-6 fade-up">{{ config.profile.subheading }}</p>
    <a href="#contact" class="font-mono text-sm text-accent hover:text-fg transition-colors fade-up">{{ config.profile.cta }}</a>
  </section>
</template>

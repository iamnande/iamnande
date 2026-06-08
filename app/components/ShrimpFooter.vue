<script setup lang="ts">
const config = useAppConfig()
</script>

<template>
  <footer class="py-16 px-8 border-t border-surface">
    <div class="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">
      <div class="space-y-1">
        <p class="font-mono text-sm text-fg">{{ config.profile.name }}</p>
        <p class="font-mono text-xs text-fg/40">{{ config.profile.tagline }}</p>
      </div>
      <nav class="flex items-center gap-8">
        <template v-for="item in config.site.nav" :key="item.to">
          <a
            v-if="item.external"
            :href="item.to"
            target="_blank"
            rel="noopener noreferrer"
            class="font-mono text-xs text-fg/40 hover:text-fg transition-colors"
          >{{ item.name }}</a>
          <NuxtLink
            v-else
            :to="item.to"
            class="font-mono text-xs text-fg/40 hover:text-fg transition-colors"
          >{{ item.name }}</NuxtLink>
        </template>
      </nav>
      <a v-if="config.site.cv" :href="config.site.cv.href" class="font-mono text-xs text-accent/60 hover:text-accent transition-colors">
        {{ config.site.cv.label }}
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
const config = useAppConfig()
</script>

<template>
  <section class="border-t border-surface py-32 space-y-8">
    <h2 class="font-mono text-xs text-fg/40 uppercase tracking-widest">projects</h2>
    <div class="space-y-10">
      <div v-for="project in config.projects" :key="project.name" class="space-y-2">
        <div class="flex items-center gap-3">
          <span class="font-mono text-sm text-fg">{{ project.name }}</span>
          <span class="font-mono text-xs text-fg/40">[{{ project.tags.join(', ') }}]</span>
        </div>
        <p class="font-mono text-sm text-fg/80">{{ project.description }}</p>
        <a :href="project.url" target="_blank" rel="noopener noreferrer" class="font-mono text-xs text-accent hover:text-fg transition-colors">↗ github</a>
      </div>
    </div>
  </section>
</template>

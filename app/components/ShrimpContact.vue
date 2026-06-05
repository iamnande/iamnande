<script setup lang="ts">
const config = useAppConfig()
</script>

<template>
  <section id="contact" class="border-t border-surface py-32 space-y-8">
    <h2 class="font-mono text-xs text-fg/40 uppercase tracking-widest">contact</h2>
    <p class="font-mono text-sm text-fg/80">drop me a line</p>
    <div class="space-y-2">
      <a
        v-for="item in config.contact"
        :key="item.label"
        :href="item.url"
        :target="item.url.startsWith('mailto:') ? undefined : '_blank'"
        :rel="item.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'"
        class="block font-mono text-sm text-fg/60 hover:text-fg transition-colors"
      >↗ {{ item.label }}</a>
    </div>
  </section>
</template>

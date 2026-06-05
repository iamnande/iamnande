<script setup lang="ts">
const config = useAppConfig()

const currentExperience = config.profile.experiences.find(e => !e.endDate)
const pastExperiences = config.profile.experiences.filter(e => !!e.endDate)

function formatPeriod(startDate: string, endDate?: string | null): string {
  const fmt = (ym: string) => {
    const [year, month] = ym.split('-')
    const d = new Date(+year, +month - 1)
    return `${d.toLocaleDateString('en-US', { month: 'short' }).toLowerCase()} '${year.slice(2)}`
  }
  return `${fmt(startDate)} - ${endDate ? fmt(endDate) : 'present'}`
}
</script>

<template>
  <!-- current role -->
  <section v-if="currentExperience" class="border-t border-surface py-32 space-y-8">
    <h2 class="font-mono text-xs text-fg/40 uppercase tracking-widest">current role</h2>
    <div class="space-y-2">
      <p class="font-mono text-sm text-fg/60">{{ currentExperience.company }} · {{ currentExperience.role }} · {{ formatPeriod(currentExperience.startDate) }}</p>
      <p class="font-mono text-sm text-fg/80">{{ currentExperience.summary }}</p>
    </div>
  </section>

  <!-- work history -->
  <section class="border-t border-surface py-32 space-y-8">
    <h2 class="font-mono text-xs text-fg/40 uppercase tracking-widest">work history</h2>
    <div class="space-y-10">
      <div v-for="entry in pastExperiences" :key="`${entry.company}-${entry.startDate}`" class="space-y-2">
        <p class="font-mono text-sm text-fg/60">{{ entry.company }} · {{ entry.role }} · {{ formatPeriod(entry.startDate, entry.endDate) }}</p>
        <p class="font-mono text-sm text-fg/80">{{ entry.summary }}</p>
      </div>
    </div>
  </section>
</template>

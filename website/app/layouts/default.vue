<script setup lang="ts">
</script>

<template>
  <div>
    <UContainer>
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>

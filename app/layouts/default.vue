<template>
  <div class="min-h-screen flex flex-col">
    <ShrimpNav />
    <main class="flex-1 pt-20">
      <slot />
    </main>
    <ShrimpFooter />
  </div>
</template>

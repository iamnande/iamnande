<template>
  <div class="min-h-screen flex flex-col">
    <ShrimpNav />
    <main class="flex-1">
      <slot />
    </main>
    <ShrimpFooter />
  </div>
</template>

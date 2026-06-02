<template>
  <div class="min-h-screen flex flex-col">
    <AppNav />
    <main class="flex-1 pt-20">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

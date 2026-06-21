<script lang="ts" setup>
const { data: home } = await useAsyncData("home", () =>
  queryCollection("home").first(),
);

if (!home.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "woops. shrimp not found.",
    fatal: true,
  });
}

console.log("home data: ", home.value);
</script>

<template>
  <UPageHero
    :title="home.hero.title"
    :description="home.hero.description"
    orientation="horizontal"
    :links="home.hero.actions"
    class="lg:pt-50"
  >
    <div class="flex justify-center">
      <img
        :src="home.hero.image.source"
        :alt="home.hero.image.alt"
        class="w-100 rounded-4xl shadow-2xl ring ring-default"
        loading="lazy"
      />
    </div>
  </UPageHero>

  <!-- TODO: sections -->
</template>

<script setup lang="ts">
</script>

<template>
    <Header :links="navLinks" />

    <UContainer>
        <slot />
    </UContainer>
        
    <Footer />
</template>

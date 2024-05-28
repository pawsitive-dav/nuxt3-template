<script setup lang="ts">
useHead({
  title: "Home",
});
</script>

<template>
  <div class="container mx-auto">
    <!-- Hero Section -->
    <UCard>
      <template #header>
        <h3 class="text-xl font-bold">{{ $t("home.title") }}</h3>
      </template>
      <template #body>
        <p>{{ $t("home.description") }}</p>
      </template>
    </UCard>
  </div>
</template>

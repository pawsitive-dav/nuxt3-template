<script setup lang="ts">
useHead({
  title: "About Us",
});
</script>

<template>
  <div>
    <h1>About Us Page</h1>
    <div>
      {{ $t("about.title") }}
    </div>
    <p>{{ $t("about.description") }}</p>
  </div>
</template>

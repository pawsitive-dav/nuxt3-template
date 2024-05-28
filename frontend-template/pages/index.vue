<script setup lang="ts">
useHead({
  title: "Home",
});
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <div>
      {{ $t("home.title") }}
    </div>
    <p>{{ $t("home.description") }}</p>
  </div>
</template>

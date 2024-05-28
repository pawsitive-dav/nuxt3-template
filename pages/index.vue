<script setup>
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

    <div class="card elevation-1">Elevation 1</div>
    <div class="card elevation-2">Elevation 2</div>
    <div class="card elevation-3">Elevation 3</div>
    <div class="card elevation-4">Elevation 4</div>
    <div class="card elevation-5">Elevation 5</div>
  </div>
</template>

<style scoped>
.card {
  width: 100px;
  height: 100px;
  padding: 20px;
  margin: 20px;
  border-radius: 4px;
  background-color: #fff;
}
</style>

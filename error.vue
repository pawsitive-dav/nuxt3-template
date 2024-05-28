<script>
export default {
  props: {
    error: Object,
  },
};
</script>

<template>
  <div class="error-page-container">
    <div class="error-page">
      <h1>Oops, something went wrong!</h1>
      <p v-if="error.message">{{ error.message }}</p>
      <p v-else>An unexpected error has occurred.</p>
      <NuxtLink to="/" class="home-link">Go back to Homepage</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.error-page-container {
  display: flex;
  width: 100%;
  height: 100dvh;
  align-items: center;
  justify-content: center;
}

.error-page {
  text-align: center;
  padding: 20px;
  max-width: 600px;
}

.error-page h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
}

.error-page p {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 30px;
}

.home-link {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.home-link:hover {
  background-color: #0056b3;
}
</style>

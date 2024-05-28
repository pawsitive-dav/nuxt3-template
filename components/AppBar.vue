<script setup>
const navbarList = [
  { pathUrl: "index", pathName: "Home", pathIcon: "" },
  { pathUrl: "/about", pathName: "About Us", pathIcon: "" },
];

const localePath = useLocalePath();
</script>

<template>
  <ul>
    <li v-for="(item, index) in navbarList" :key="'navbarList' + index">
      <NuxtLink :to="localePath(item.pathUrl)">{{ item.pathName }}</NuxtLink>
    </li>
  </ul>
</template>

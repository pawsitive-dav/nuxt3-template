<script setup lang="ts">
const colorMode = useColorMode();
const navbarList = [
  { pathUrl: "index", pathName: "Home", pathIcon: "" },
  { pathUrl: "/foundation", pathName: "Foundation", pathIcon: "" },
  { pathUrl: "/components", pathName: "Components", pathIcon: "" },
];

const localePath = useLocalePath();
</script>

<template>
  <header class="py-2">
    <div class="container mx-auto grid grid-cols-12 items-center">
      <div class="col-span-2 flex justify-start">
        <!-- <img
          v-if="colorMode.preference === 'light'"
          src="@/assets/svg/logo/rhea-text.svg"
          width="120"
        />
        <img v-else src="@/assets/svg/logo/rhea-text-white.svg" width="120" /> -->
        LOGO
      </div>
      <nav class="col-span-8 flex justify-center">
        <ul class="flex space-x-4">
          <li v-for="(item, index) in navbarList" :key="'navbarList' + index">
            <NuxtLink :to="localePath(item.pathUrl)">
              {{ item.pathName }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="col-span-2 flex justify-end">
        <ButtonsThemeSwitcher />
        <ButtonsLangSwitcher />
      </div>
    </div>
  </header>
</template>

<!-- <script setup>
import { ref, watch } from "vue";

const { locale, locales, setLocale } = useI18n();
const language = [...locales.value];

const selected = ref(language[0].code);
watch(selected, (newLocale) => {
  setLocale(newLocale);
});
</script>

<template>
  <USelectMenu
    v-model="selected"
    :options="language"
    selected-icon="i-heroicons-chevron-left-16-solid"
    value-attribute="code"
    option-attribute="name"
  />
</template> -->

<script setup>
const { locale, locales, setLocale } = useI18n();
const language = [...locales.value];
const items = [
  [
    {
      label: "English",
      code: "en",
    },
    {
      label: "ไทย",
      code: "th",
    },
  ],
];
</script>

<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton icon="i-heroicons-language" color="gray" variant="ghost" />
  </UDropdown>
</template>

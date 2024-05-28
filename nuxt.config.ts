export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      titleTemplate: "%s - Frontend Template",
    },
  },

  css: ["@/assets/css/main.css"],

  colorMode: {
    preference: "dark",
  },

  modules: ["@nuxtjs/i18n", "@nuxt/ui"],

  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        file: "en/index.ts",
      },
      {
        code: "th",
        name: "ไทย",
        file: "th/index.ts",
      },
    ],
    lazy: true,
    langDir: "locales",
    defaultLocale: "en",
  },
});

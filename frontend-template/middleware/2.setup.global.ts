export default defineNuxtRouteMiddleware((to, from) => {
  console.log(
    "This is console log of setup global middleware. | dir: middleware/2.setup.global.ts"
  );
  // Checkup app language
  checkupAppLanguage();

  // Checkup app theme
  checkupAppTheme();
});

const setupLocalStorageItem = (
  key: string,
  defaultValue: string,
  callback: (value: string) => void
) => {
  if (process.client) {
    const item = localStorage.getItem(key);
    if (item) {
      callback(item);
    } else {
      localStorage.setItem(key, defaultValue);
    }
  }
};

const checkupAppLanguage = () => {
  setupLocalStorageItem("_app.language", "en", (langNow) => {
    // setup language to i18n
  });
};

const checkupAppTheme = () => {
  setupLocalStorageItem("_app.theme", "light", (appTheme) => {
    // setup app theme
  });
};

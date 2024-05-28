import home from "./home";
import about from "./about";

export default defineI18nLocale(async (locale) => {
  return {
    home: home,
    about: about,
  };
});

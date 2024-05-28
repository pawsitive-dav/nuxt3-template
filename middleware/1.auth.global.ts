export default defineNuxtRouteMiddleware((to, from) => {
  console.log(
    "This is console log of auth middleware. | dir: middleware/1.auth.global.ts"
  );
});

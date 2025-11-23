import { defineConfig } from "vite";

export default defineConfig({
  base: '/coffeeroaster-project/',
  server: {
    open: true, // Opens browser automatically
  },
  css: {
    devSourcemap: true, // Enables SCSS source maps
  },
});

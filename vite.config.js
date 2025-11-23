import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/coffeeroaster-project/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        plan: resolve(__dirname, "starter-code/plan.html"),
      },
    },
  },
  server: {
    open: true, // Opens browser automatically
  },
  css: {
    devSourcemap: true, // Enables SCSS source maps
  },
});

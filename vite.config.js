import { defineConfig } from "vite";
import { resolve } from "path";
import { glob } from "glob";

// Automatically find all HTML files in the project
const htmlFiles = glob.sync("**/*.html", {
  ignore: ["node_modules/**", "dist/**"],
});

// Convert to input object for Vite
const input = {};
htmlFiles.forEach((file) => {
  const name = file.replace(/\.html$/, "").replace(/\//g, "-");
  input[name] = resolve(__dirname, file);
});

export default defineConfig({
  base: "/coffeeroaster-project/",
  build: {
    rollupOptions: {
      input,
    },
  },
  server: {
    open: true, // Opens browser automatically
  },
  css: {
    devSourcemap: true, // Enables SCSS source maps
  },
});

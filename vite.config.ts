import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import postcssNested from "postcss-nested";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "./build",
    emptyOutDir: true,
  },
  plugins: [svgr({})],
  css: {
    postcss: {
      plugins: [postcssNested],
    },
  },
});

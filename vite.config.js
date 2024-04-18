// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        villas: resolve(__dirname, "villas/index.html"),
        preloader1: resolve(__dirname, "preloader/index.html"),
        preloader2: resolve(__dirname, "preloader2/index.html"),
        threejs1: resolve(__dirname, "threejs1/index.html"),
        elements: resolve(__dirname, "elements/index.html"),
        poetry: resolve(__dirname, "poetry/index.html"),
      },
    },
  },
});

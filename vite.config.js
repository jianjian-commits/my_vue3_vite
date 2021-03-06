import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  plugins: [vue(), viteMockServe({})],
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        // /api/todos/1 => http://jsonplaceholder.typicode.com/todos/1
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

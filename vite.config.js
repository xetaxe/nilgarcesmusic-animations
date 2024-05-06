import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: "src",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        animation1: resolve(__dirname, 'animations/1.html'),
        animation2: resolve(__dirname, 'animations/2.html'),
      },
    },
  },
})
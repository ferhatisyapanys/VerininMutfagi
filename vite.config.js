import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  root: '.',
  build: {
    outDir: 'dist'
  },
  server: {
    open: '/index.html'
  },
  assetsInclude: ['**/*.css', '**/*.js', '**/*.png', '**/*.jpg', '**/*.svg', '**/*.ico']
})
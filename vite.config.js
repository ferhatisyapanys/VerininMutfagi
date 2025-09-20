import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  publicDir: '.',
  build: {
    outDir: 'dist'
  },
  server: {
    open: '/index.html'
  },
  assetsInclude: ['**/*.css', '**/*.js', '**/*.png', '**/*.jpg', '**/*.svg', '**/*.ico']
})
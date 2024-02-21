import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'ChainpalUtils',
      fileName: 'chainpal-utils'
    }
  }
})

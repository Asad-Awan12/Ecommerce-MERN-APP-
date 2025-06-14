import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
   optimizeDeps: {
    exclude: ['@mapbox/node-pre-gyp'],
  },
  ssr: {
    external: ['@mapbox/node-pre-gyp'],
  },
});

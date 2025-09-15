import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  base: "/",   // <- this is the only change from GitHub Pages

  server: {
    port: 5173,
  },

  build: {
    outDir: "dist",
    sourcemap: true,
  },
})
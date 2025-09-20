import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Remove base path for standard deployment
  base: "/",

  server: {
    port: 5173,
  },

  build: {
    outDir: "dist",
    sourcemap: true,
  },
})
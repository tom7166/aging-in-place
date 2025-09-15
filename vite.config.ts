import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Set the base path to your GitHub Pages repo
  base: '/aging-in-place/',

  server: {
    port: 5173, // optional, default port for dev server
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});

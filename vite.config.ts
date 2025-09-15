// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vite/plugin-react';

export default defineConfig({
  plugins:[react()]
  base: '/aging-in-place/',
  build: {
    outDir: 'dist',
  },
});

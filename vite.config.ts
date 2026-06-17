import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: process.cwd(),
  base: '/',
  publicDir: 'public',
  server: {
    port: 5173,
    host: true,
    hmr: { overlay: false },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});

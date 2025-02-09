import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // ...
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  server: {
    port: 3000,
  },
  base: process.env.NODE_ENV === 'production' ? '/react-fall-2024/' : '/',
});

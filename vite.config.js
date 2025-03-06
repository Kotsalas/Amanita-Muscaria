import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? './' : '/', // Corrects the base path for production
  build: {
    outDir: 'dist', // Ensure the build outputs to 'dist' folder
  },
});

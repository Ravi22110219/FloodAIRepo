
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Match with homepage in package.json
  build: {
    outDir: 'dist',  // Ensure the build output directory is correct
  },
});

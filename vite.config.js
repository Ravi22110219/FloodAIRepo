import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Detect if the app is being deployed to GitHub Pages
const isGitHubPages = process.env.DEPLOY_ENV === 'github';

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/FloodAIRepo/' : '/', // GitHub Pages vs. Vercel
  build: {
    outDir: 'dist',
  },
});

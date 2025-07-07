import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If your repo is called "orbit-gallery", for example:
const repoName = 'orbit-gallery';

export default defineConfig({
  base: '/orbit-gallery/',
  plugins: [react()],
});


import { defineConfig } from 'vite';

export default defineConfig({
  // If your URL is https://<username>.github.io/<repo-name>/, set base to '/<repo-name>/'
  // If using a custom domain or user page, use '/'
  base: './', 
  build: {
    outDir: 'dist',
  }
});

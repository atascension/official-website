import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      // Use VITE_BASE_PATH env var for deployment flexibility:
      //   GitHub Pages subdirectory: VITE_BASE_PATH=/Updated-Website-Design/ npm run build
      //   Custom domain (atascension.com): omit env var (defaults to '/')
      base: env.VITE_BASE_PATH || '/',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

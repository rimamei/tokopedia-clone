import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': '/src' } },
  build: {
    outDir: 'build',
  },
  server: {
    host: '0.0.0.0',
    port: 4000,
  },
  preview: {
    port: 4000,
  },
});

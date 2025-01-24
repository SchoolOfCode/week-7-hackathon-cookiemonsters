import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/week-7-hackathon-cookiemonsters',
  plugins: [react()],
});

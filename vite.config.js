import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      host: process.env.REPL_SLUG + '.' + process.env.REPL_OWNER + '.replit.co',
      protocol: 'wss',
    },
    allowedHosts: ['all'], // still keep this
  },
});

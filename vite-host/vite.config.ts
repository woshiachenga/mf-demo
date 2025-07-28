import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        // remote: 'http://localhost:5001/dist/assets/remoteEntry.js',
        remoteUmi: 'http://localhost:8000/remote.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    port: 3000,
  },
});

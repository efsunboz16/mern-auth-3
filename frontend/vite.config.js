import React from 'react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [React],
  optimizeDeps: {
    exclude: ['crypto'], // crypto modülünü optimize etmeye çalışma
  },
  resolve: {
    alias: {
      crypto: false, // Vite'in crypto modülünü çözmesini engelle
    },
  },
});
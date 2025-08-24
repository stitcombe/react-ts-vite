/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'clover', 'json', 'json-summary'],
    },
    reporters: ['default', 'html', 'junit'],
    exclude: [...configDefaults.exclude, '**/__mocks__/**'],
    includeSource: ['src/**/*.{js,ts}'],
    outputFile: {
      junit: './coverage/vitest-junit.xml',
    },
  },
});

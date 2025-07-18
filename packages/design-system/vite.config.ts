import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    libInjectCss(),
    react(),
    dts({ outDir: 'dist/types' }),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
    lib: {
      entry: 'src/index.ts',
      name: 'DesignSystem',
    },
  },
});

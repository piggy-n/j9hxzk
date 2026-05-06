import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import autoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/index" as *;',
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    autoImport({
      dts: 'src/auto-imports.d.ts',
      dtsMode: 'overwrite',
      imports: [
        'vue',
        {
          classnames: [['default', 'cn']],
        },
      ],
      packagePresets: ['vue-router'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@repo/map-core': path.resolve(__dirname, '../../packages/map-core/src'),
    },
  },
});

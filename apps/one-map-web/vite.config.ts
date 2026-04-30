import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import autoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    autoImport({
      imports: [
        {
          classnames: [['default', 'cn']],
        },
      ],
      dts: 'src/auto-imports.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@map-core': path.resolve(__dirname, '../../packages/map-core/src')
    }
  },
  css: {
    modules:{
      localsConvention: 'camelCase'
    }
  }
})

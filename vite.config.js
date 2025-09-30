import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  // ファイルプロトコルで読み込む都合、アセットは相対パスに
  base: './'
});

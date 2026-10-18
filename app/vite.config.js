import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
export default defineConfig({build:{rollupOptions:{input:{
  home:fileURLToPath(new URL('./index.html',import.meta.url)),
  menu:fileURLToPath(new URL('./menu/index.html',import.meta.url)),
  visit:fileURLToPath(new URL('./visit/index.html',import.meta.url)),
}}}});

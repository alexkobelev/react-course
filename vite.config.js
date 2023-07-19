import { resolve } from 'path';
import { defineConfig } from 'vite';
import fs from 'fs';

// Получаем все файлы из каталога 'pages'
const pagesDir = resolve(__dirname, 'pages');
const pageFiles = fs.readdirSync(pagesDir);

// Создаем объект, где ключи - это названия страниц, а значения - это пути к файлам страниц
const pages = pageFiles.reduce((acc, file) => {
  // Удаляем расширение .html
  const pageName = file.replace('.html', '');
  acc[pageName] = resolve(pagesDir, file);
  return acc;
}, {});

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...pages,
      },
    },
  },
});

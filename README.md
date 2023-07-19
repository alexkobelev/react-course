# Шаблон для проектов (JS + SCSS + Vite)

Это шаблон для проктов на базе следующих технологий:

- [Базовый JavaScript](https://developer.mozilla.org/ru/docs/Web/JavaScript)
- [Vite (сборщик проектов)](https://vitejs.dev/)
- [SCSS](https://sass-lang.com/)

## Разработка

### Примечание о совместимости из документации Vite

Для Vite требуется [Node.js](https://nodejs.org/) версии 14.18+, 16+. Однако для работы некоторых шаблонов требуется более поздняя версия Node.js, обновите ее, если ваш менеджер пакетов предупредит об этом.

### Установка зависимостей

Для установки зависимостей, выполните команду:

```sh
npm install
```

### Запуск сервера разработки

Чтобы запустить локальный сервер для разработки, выполните команду:

```sh
npm run dev
```

Страница будет доступна по адресу: http://localhost:5173/ (или другой порт, если вы изменили настройки сервера).

### Cборка

Чтобы выполнить production сборку, выполните команду:

```sh
npm run build
```

### Предпросмотр сборки

Чтобы запустить локальный сервер для предпросмотра собранного проекта выполните команду:

```sh
npm run preview
```

Страница будет доступна по адресу: http://localhost:4173/ (или другой порт, если вы изменили настройки сервера).

## Создание новой страницы

Как создать новую страницу и подключить к ней JS и SCSS:

Допустим вы хотите создать новую страницу "О компании" и подключить стили.

1. В директории `/pages/` создайте новый HTML файл `about.html` со стандартным html шаблоном и добавьте div с id='app':

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

2. В директории `/src/assets/styles/` cоздайте новый SCSS файл `about.scss` и добавте в него импорт `normalize.css`:

```css
@import 'normalize.css';
```

3. В директории `/src/assets/js/` создайте новый JS файл `about.js` и импортируйте необходимые стили из директории `/src/assets/styles/`:

```javascript
import '../styles/about.scss';
```

5. Теперь подключите ваш JS файл к вашей HTML странице следующим образом:

```html
<script type="module" src="src/assets/js/about.js"></script>
```

6. Итоговая структура вашего проекта должна выглядеть следующим образом:

```bash
/project
│─── index.html
│─── /pages
│    │    about.html
│─── /public
│    │    ...
│─── /src
│    │─── /assets
│    │    │─── /styles
│    │    │    │    about.scss
│    │    │    │    style.scss
│    │    │─── /js
│    │    │    │    about.js
│    │    │    │    main.js
│    │─── /components
│    │    │    ...
│    ...
```

7. Запустите проект локально с помощью команды `npm run dev`
8. Проверьте отображение вашей новой страницы по адресу [http://localhost:5173/pages/about.html](http://localhost:5173/pages/about.html) (или другой порт, если вы изменили настройки сервера).

## Директория public и директория src/assets

В директории public должны храниться файлы, которые:

- Никогда не используются в исходном коде (например, `robots.txt`)
- Должны содержать конкретное имя файла (без хеширования)
- ...или вы просто не хотите сначала импортировать файл, чтобы только получить его URL (если вам нужен только URL файла)

Все файлы в этой директории будут сёрвиться через корневой путь / во время dev разработки и будут скопированы в dist директорию корневого каталога как есть.

Обратите внимание:

- Вы всегда должны ссылаться на ресурсы public используя абсолютный рутовый путь - например, ссылка на файл `public/icon.png` должна быть такой ссылкой в исходном коде `/icon.png`.
- Файлы в директории public не могут быть импортированы в JavaScript.

В директории src/assets следует хранить файлы, которые:

- Используются напрямую в вашем исходном коде, например, изображения, шрифты или стили, которые вы хотите импортировать в ваши JavaScript и SCSS файлы.
- Нуждаются в предварительной обработке сборщиком, такой как оптимизация изображений, преобразование стилей или компиляция JavaScript.

## Пример структуры проекта:

```bash
/project
│─── index.html
│─── /pages
│    │    home.html
│    │    about.html
│    │    ...
│─── /public
│    │─── /favicon
│    │    │    favicon.ico
│    │    │    ...
│    │─── /fonts
│    │    │    Roboto-Regular.woff
│    │    │    ...
│    │─── /images
│    │    │    logo.png
│    │    │    ...
│─── /src
│    │─── /assets
│    │─── │─── │───/images
│    │─── │─── │───/icons
│    │─── │─── │───...
│    │─── /components
│    │    │    │─── /header
│    │    │    │    │    header.js
│    │    │    │    │    header.scss
│    │    │    │─── /footer
│    │    │    │    │    footer.js
│    │    │    │    │    footer.scss
│    │    │    ...
│    │─── /js
│    │    │    home.js
│    │    │    about.js
│    │    │    ...
│    │─── /scss
│    │    │    home.scss
│    │    │    about.scss
│    │    │    ...
│    ...
```

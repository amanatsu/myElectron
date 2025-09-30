setup
npm i -D electron@latest
npm i -D electron-builder
npm i vue
npm i -D vite @vitejs/plugin-vue electron electron-builder concurrently wait-on cross-env

start
npm start

build
npm run dist:win
npm run dist:mac
npm run dist:linux
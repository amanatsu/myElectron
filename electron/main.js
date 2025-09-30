const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const isDev = !!process.env.VITE_DEV_SERVER_URL;

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  if (isDev) {
    // 開発中はViteの開発サーバーに接続
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
    win.webContents.openDevTools({ mode: 'detach' });
  } else {
    // パッケージ/実行ファイルではビルド済みHTMLを読み込む
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

// サンプルIPC
ipcMain.handle('ping', () => 'pong');

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

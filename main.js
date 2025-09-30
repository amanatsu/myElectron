const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // セキュア: レンダラへはpreload経由で橋渡し
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  win.loadFile('index.html');
}

// レンダラからの呼び出しに応答
ipcMain.handle('ping', () => 'pong');

app.whenReady().then(() => {
  createWindow();

  // macOS: Dockアイコンクリックで再度ウィンドウを開く
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// mac以外では全ウィンドウ閉じたら終了
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

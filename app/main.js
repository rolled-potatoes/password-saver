const { app, BrowserWindow, Tray } = require('electron');
const path = require('path');

let tray, win;

function createWindow() {
  const windowOption = {
    width: 300,
    height: 400,
    resizable: false,
    alwaysOnTop: true,
    frame: false,
    webPreferences: {
      enableRemoteModule: true,
      preload: path.join(__dirname, './preload.js'),
      webSecurity: false,
      nodeIntegration: true,
    },
  };
  const isDev = process.env.NODE_ENV === 'development';
  win = new BrowserWindow(windowOption);

  if (isDev) {
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools();
  } else {
    const htmlPath = path.join(__dirname, '..', 'build', 'index.html');
    win.loadFile(htmlPath);
  }

  win.setMenu(null);
  win.webContents.on('did-fail-load', () => {
    if (isDev) {
      win.loadURL('http://localhost:3000');
      win.webContents.openDevTools();
    } else {
      const htmlPath = path.join(__dirname, '..', 'build', 'index.html');
      win.loadFile(htmlPath);
    }
  });
}
app.whenReady().then(() => {
  createWindow();
  initTray();
  app.dock.hide();
});

function initTray() {
  const iconPath = path.join(__dirname, './trayIcon.png');
  tray = new Tray(iconPath);
  let { x, y } = tray.getBounds();
  win.setBounds({ x: x - 300, y });
  tray.on('click', clickTray);
}

function clickTray(event, bounds) {
  if (!win) {
    createWindow();
    win.setBounds({ x: bounds.x - 150, y: bounds.y });
  } else {
    win.destroy();
    win = null;
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

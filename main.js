const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

const createWindow = () => {
    
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
        nodeIntegration:true, //渲染进程可以使用Node
        webSecurity:false,
    }
  })
  const usrLocation=isDev?'http://localhost:3000/':''
  win.loadURL('http://localhost:3000')
  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})
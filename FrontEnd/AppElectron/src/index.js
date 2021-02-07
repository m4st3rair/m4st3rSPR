const { createWindow } = require('./main')
const {app} = require('electron')


require('electron-reload')(__dirname)

require('./database')


app.allowRendererProcessReuse = true;
app.whenReady().then(createWindow);
const {BrowserWindow, ipcMain} =require('electron');



ipcMain.handle('perform-action', (event, cosa) => {
  console.log(cosa.nameProducto)
})


function createProduct() {
    console.log("newProd");
}


let window

function createWindow(){
    window = new BrowserWindow({
        width:1000,
        height:800,
        webPreferences:{
            nodeIntegration:true
        }
    });
    window.loadFile('src/ui/start.html')
}


module.exports={
    createWindow,
    createProduct
}
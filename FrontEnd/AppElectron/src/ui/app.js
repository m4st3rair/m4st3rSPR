const { ipcRenderer} = require('electron')
const { remote } = require('electron');
const main = remote.require('./main');

const productForm = document.getElementById('productForm');





productForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    var nameProducto = document.getElementById('name').value;
    var priceProducto = document.getElementById('price').value;
    var descriptionProducto = document.getElementById('description').value;
    
    
    const newProd={nameProducto, priceProducto, descriptionProducto}

    console.log(nameProducto);
    console.log(priceProducto);
    console.log(descriptionProducto);
    ipcRenderer.invoke('perform-action', newProd)

    
})
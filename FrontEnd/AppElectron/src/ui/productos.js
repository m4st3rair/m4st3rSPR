const{ ipcRenderer} = require('electron')

console.log('Echo');
const productForm1 = document.getElementById('productForm');


productForm1.addEventListener('submit',(e)=>{
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
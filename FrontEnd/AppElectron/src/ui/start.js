const { ipcRenderer} = require('electron')
const { remote } = require('electron');
const main = remote.require('./main');
let fs = require('fs');

const productForm = document.getElementById('inicio');
const loginRef = document.getElementById('login');
const inventarioRef = document.getElementById('inventario');
//const addProductRef = document.getElementById('productForm');



productForm.addEventListener('click',(e)=>{
    e.preventDefault();
    const mainContent= document.getElementById('mainContent');

    //Vamos a Cargar un archivo en el documento ya habierto
    fs.readFile('./src/ui/rutas/bienvenido.html', 'utf-8', (err, data) => {
      if(err) {
        console.log('error: ', err);
      } else {
        mainContent.innerHTML=data;
      }
    });
});



loginRef.addEventListener('click',(e)=>{
  e.preventDefault();
  const mainContent= document.getElementById('mainContent');

  //Vamos a Cargar un archivo en el documento ya habierto
  fs.readFile('./src/ui/rutas/singIn.html', 'utf-8', (err, data) => {
    if(err) {
      console.log('error: ', err);
    } else {
      mainContent.innerHTML=data;
    }
  });
})



inventarioRef.addEventListener('click',(e)=>{
  e.preventDefault();
  const mainContent= document.getElementById('mainContent');

  //Vamos a Cargar un archivo en el documento ya habierto
  fs.readFile('./src/ui/rutas/inventario.html', 'utf-8', (err, data) => {
    if(err) {
      console.log('error: ', err);
    } else {
      mainContent.innerHTML=data;
    }
  });
  //*

  var myVar;
  function myFunction() {
    myVar = setTimeout(alertFunc, 3000);
  }

  function alertFunc() {
    console.log("Hello!");
    const addProductRef = document.getElementById('productForm');
    addProductRef.addEventListener('submit',(e)=>{
    e.preventDefault();
  
    var nameProducto = document.getElementById('name').value;
    var priceProducto = document.getElementById('price').value;
    var descriptionProducto = document.getElementById('description').value;
  
    const newProd = {nameProducto,priceProducto,descriptionProducto}
  
    console.log (newProd);
    ipcRenderer.invoke('add_product',newProd);
  
  });
  }
  myFunction();
  
})

/*
//*/

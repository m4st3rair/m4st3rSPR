const { ipcRenderer} = require('electron')
const { remote } = require('electron');
const main = remote.require('./main');
let fs = require('fs');

const productForm = document.getElementById('inicio');
const loginRef = document.getElementById('login');


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
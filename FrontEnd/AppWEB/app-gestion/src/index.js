// const element = document.createElement("h1");
// element.innerHTML = "Hello react"
// const container = document.getElementById("root")
// container.appendChild(element)


import React from 'react';
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './components/App'




const container = document.getElementById('root')
ReactDOM.render( <App/>, container)
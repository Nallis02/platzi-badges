// tenemos un elemento 
// const element = document.createElement('h1');
//element.innerText = 'Hello, Nallive aprendiendo Badge';
//un contenedor 
//const container = document.getElementById('app');
//y lo estamos mostrando en pantalla
// container.appendChild(element);
//pero no estamos usando react

//ahora vamos a usar react
//primero importamos dos herramientas de react y trabajan en conjunto
//react sera el analogo de createElement y reactDOM sera el analogo de appendChild
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './Global.css';
import ReactDOM from 'react-dom';

import App from './components/App';

// const jsx = <h1>Hello, Nallive aprendiendo react</h1>
// const element = React.createElement(
//     'a', 
//     {href: 'https://platzi.com'},
//     'Ir a platzi'
//     );
// const name = 'Nallive'; 
// const sum = ()=> 3 + 3;
// const element = React.createElement('h1', {}, `Hola, soy ${name}`)
// vamos a hacer lo mismo con jsx
// const jsx = <h1>Hola soy, {__expresiones__}</h1>
//una expresion es algo que en javascript se interpreta y se evalua sumas, llamada a funciones, etc 
//en el campo expresion van valores que se pueden evaluar
//si terminan siendo valor flase no se van a ver (undefined, null, 0, ' ')
// const jsx = <h1>Hola soy, {sum()}</h1>
//creamos un contenedor con contenido 
// const jsx = (
//     <div>
//         <h1>Hola, soy Nallive</h1>
//         <p>Soy Tecnologa en sistemas</p>
//     </div>
// );
// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hola, soy Nallive'),
//     React.createElement('p', {}, 'Soy tecnologa en sistemas.')
// )


const container = document.getElementById('app');
//ReactDom.render(__qué__, __dónde__); toma dor argumentos
ReactDOM.render(<App />, 
container)

//ReactDOM.render(jsx, container)

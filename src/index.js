// Crear elementos html por javascript
// const element = document.createElement('h1')
// element.innerText = 'Hola soy nuevo en React.JS'

// const container = document.getElementById('app')

// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import BadgeNew from './pages/BadgeNew'

import 'bootstrap/dist/css/bootstrap.css'

import './global.css'

// const element = <h1>Hola desde ReactJS</h1>

// React.createElement sin props
// const element = React.createElement('h1', {}, 'Hola!! soy los children')

// React.createElement con props
// const element = React.createElement('a', {
//     href: 'https://efrenmartinez.dev',
//     target: '_blank'
// }, 'Ir a PLATZI')

// JSX con variable
// const name = 'Platzi'
// const element = <h1>Hola, soy {name}</h1>

// JSX
// const element = (
//     <div>
//         <h1>Hola, soy Efren</h1>
//         <p>Developer Frontend</p>
//     </div>
// )

// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hola, soy Efren'),
//     React.createElement('p', {}, 'Developer Frontend ReactJS')
// )

const container = document.getElementById('app')

// ReactDOM.render('Qué queremos renderizar', 'Donde queremos renderizar')

ReactDOM.render(<BadgeNew />, container)

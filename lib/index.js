"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

require("fslightbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import{suma} from './operaciones'
// import{saludo} from './operaciones'
fsLightboxInstances['first-lightbox'].open(0);

fsLightboxInstances['second-lightbox'].props.onOpen = function () {
  return console.log('Lightbox open!');
}; // import Swal from 'sweetalert2';
// document.write(`<h2> ${saludo} </h2>`);
// document.write(`<h1> ${suma(1, 2)} </h1>`);
// console.log (suma(1, 2));
// console.log(saludo);
// Swal.fire({
//     position: 'top-end',
//     icon: 'success',
//     title: 'Paulina Ávila López',
//     showConfirmButton: false,
//     timer: 1500
//   })
// function component() {
//     const element = document.createElement('div');
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
//   }
//   document.body.appendChild(component());
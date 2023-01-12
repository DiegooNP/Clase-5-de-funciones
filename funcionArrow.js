// // forma clásica
// function sumar(a, b) {
//     return a + b;
//    }
//    console.log( sumar(2, 4) ) // 6
   
//    // ES6 arrow function
//    let sumar = (a, b) => a + b;
   
//    console.log( sumar(2, 6) ) // 6

   // Función convencional

// function sumar(n1,n2) {
//     return n1 + n2
//     }
    
    // Arrow function
    //let sumar = (n1,n2) => n1 + n2

//Para este ejercicio vamos a dar tres funciones ya definidas. Nuestro trabajo será cambiarle la sintaxis y volver a escribirlas 
//para que sean funciones de tipo arrow.

// function dameCinco() {
//     return [1,2,3,4,5];
// }
 let dameCinco = resultado => [1,2,3,4,5];

 // function multiplicarPorDos() {
//   return 123 * 2 ;
// }
 let multiplicarPorDos = () => 123 * 2;

 // function mostrarNombre() {
//   return "Mi nombre es Hernán";
// }
let mostrarNombre = nombre => "Mi nombre es Hernán"; 

//Ahora nuestro trabajo será refactorizar la función saludar() que recibe un parámetro, es decir, escribirla con la sintaxis necesaria
//para convertirla en una arrow function.

// function saludar(nombre) {
//     return 'Hola, ' + nombre + '!';
// }
let saludar = () => 'Hola, ' + nombre + '!';

//Y sí, solo nos falta practicar la sintaxis de una arrow function que reciba más de un parámetro. Tomemos la función saludar(), que 
//esta vez recibe un nombre y un apellido, y veamos de convertirla en una arrow function.

function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' +  apellido + '!';
}

let saludar = (nombre, apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';
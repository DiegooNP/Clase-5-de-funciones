//La primera función se llamará doble. Esta recibirá un número y retornará el doble.

// La segunda función se llamará triple. Esta recibirá un número y retornará el triple.

// La tercera función se llamará aplicarCallback y recibirá por parámetro un numero y una función. Esta retornará el valor de 
// aplicar dicha función al valor que recibió.

let doble = numero1 => numero1 * 2;

let triple = numero2 => numero2 * 3;

//let aplicarCallback = (numero, callback) => callback (numero) 

function aplicarCallback (numero1, doble){
    return numero1 * 2;
}
aplicarCallback (numero1, numero2, callback)
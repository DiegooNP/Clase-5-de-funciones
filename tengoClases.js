// El objetivo de este ejercicio es imprimir en pantalla un texto que estará condicionado de la siguiente manera. Utilizando switch 
// deberemos evaluar si la variable "día" es lunes, miércoles o viernes; y, en ese caso, debe imprimir el texto "tenés clases". Para 
// cualquier otro caso debe imprimir "no tenés clases".
function tengoClases(dia) {
	switch (dia) {
    	case 'lunes':
        console.log("tenés clases")
        break;
        case 'miércoles':
        console.log("tenés clases")
        break;
        case 'viernes':
        console.log("tenés clases")
        break;
        default:
            console.log("no tenés clases")

	}
}
tengoClases("jueves")
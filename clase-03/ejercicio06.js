// let factorial = Number.parseInt(prompt('Ingrese un número para calcular el factorial (debe ser menor a 10)'));

let factorial = 5;

function sacarFactor(numero) {

    /* El if valida que el número sea menor a 10
 el else muestra en consola el aviso que debe ser menor a 10. */

    if (numero > 10) {
        console.log('El número debe ser menor a 10.');S
    }

    else {
        if (numero == 0 || numero == 1) {
            numero = 1;
        }
        else {
            let i = numero;
            for (i; i >= numero; i--) {
                
                console.log(i);
            }
        }
        console.log('El factorial de ' + factorial + ' es igual a: ' + numero);
    }
}


sacarFactor(factorial);
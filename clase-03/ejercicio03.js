let a = 10;
let b = 20;

function invertirNumeros(num1, num2) {
    console.log('Los números ingresados inicialmente son: a=' + num1 + ' y b=' + num2);
    let num3 = num1;
    num1 = num2;
    num2 = num3;

/* Consulta sobre return: si por ejemplo uso
// return console.log('Los números invertidos son: ' + num2 + ' y ' + num1); 
// o como lo tengo abajo, no veo diferencia. 
// Entiendo que deberia ser return console...
// cual seria la diferencia? o es indistinto? o cual seria lo correcto?
*/
    console.log('Los números invertidos son: a=' + num1 + ' y b=' + num2);
    return;
}

invertirNumeros(a, b);
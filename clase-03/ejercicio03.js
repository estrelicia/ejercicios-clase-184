let a = 10;
let b = 20;

function invertirNumeros(num1, num2) {
    console.log('Los números ingresados inicialmente son: ' + num1 + ' y ' + num2);
    let num3 = num1;
    num1 = num2;
    num2 = num3;

    console.log('Los números invertidos son: ' + num2 + ' y ' + num1);
    return;
}

invertirNumeros(a, b);
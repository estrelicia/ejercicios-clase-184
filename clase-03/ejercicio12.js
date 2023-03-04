let bultos = prompt('Ingresá la cantidad de bultos a guardar en cajas');
let capacidadCajas = prompt('Ingresá la capacidad de cada caja (en bultos)');

function calcularCapacidad(var1, var2) {

    cajas = Math.round(var1 / var2);
    resto = var1 % var2;
    return console.log("Para guardar " + var1 + " bultos, necesitás " + cajas + " cajas. Quedan " + resto + " bultos fuera de las cajas.");
}

calcularCapacidad(bultos, capacidadCajas);
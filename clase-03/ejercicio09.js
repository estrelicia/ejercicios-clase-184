let calificacion = Number(prompt('Ingresá la calificación obtenida para ver el resultado:'));
console.log(typeof calificacion);

if ((calificacion >= 0) && (calificacion < 3)) { console.log('Muy deficiente'); }
else
    if ((calificacion >= 3) && (calificacion < 5)) { console.log('Insuficiente'); }
    else
        if ((calificacion >= 5) && (calificacion < 6)) { console.log('Suficiente'); }
        else
            if ((calificacion >= 6) && (calificacion < 7)) { console.log('Bien'); }
            else
                if ((calificacion >= 7) && (calificacion < 9)) { console.log('Notable'); }
                else
                    if ((calificacion >= 9) && (calificacion <= 10)) { console.log('Sobresaliente'); }
                    else { console.log('Hay un error. La calificación ingresada no es válida (ingresá un número entre 0 y 10)'); }

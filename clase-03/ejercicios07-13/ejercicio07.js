let palindromo = prompt('Ingresa una frase para conocer si es palindromo: ')

function esPalindromo(palindromo) {

    // Transforma palindromo (string) en array y le quita los espacios con split, luego fraseLadoA se convierte en string
    let parametro1 = palindromo.split(' ');
    fraseLadoA = parametro1.join('');
    console.log('Frase A ' + fraseLadoA);
     
    fraseLadoB = fraseLadoA.split('');
    fraseLadoB = fraseLadoB.reverse();
    fraseLadoB = fraseLadoB.join('');
    console.log('Frase B ' + fraseLadoB);

    if (fraseLadoA.toLowerCase() == fraseLadoB.toLowerCase()) { console.log('Es un palindromo') }
    else { console.log('No es un palindromo') }
    
}

esPalindromo(palindromo);
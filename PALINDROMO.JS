function calcularPalindromo(dato){
   var re = /[^A-Za-z0-9]/g ;
   var minuscula = dato.toLowerCase().replace(re, '');
   var dato2 = minuscula.split('').reverse().join('');
   if(dato2 === dato){
    console.log("La palabra " + dato + " es un palindromo")
   } else{
    console.log("La palabra " + dato + " no es un palindromo")
   }

/// regular expresion para palindromos
// let a = 5
// let b = "5"
//  === false
//  == true

//        “/[\W_]/g”
}

calcularPalindromo("neuquen")
calcularPalindromo("llorar")
calcularPalindromo("ama")
calcularPalindromo("trollear.-.-.-")
calcularPalindromo("sollos_")
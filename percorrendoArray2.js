let numeros = [10, 5, 7, 8, 9, 6, 12, 4, 55, 99, 100, 43, 64, 25, 999];

let total_impares = 0;
let total_pares = 0;

let contador = 0;

//while percorrendo todo o array
while ( contador < numeros.length ) {

    //se o numero[indice-atual], se sua divisão por 2 for igual a 0 incrementa total_pares;
    if( numeros[contador] % 2 == 0 ){
        total_pares++;
        console.log(numeros[contador] + " é par")
    //Senao incrementa total impares     
    } else {
        console.log(numeros[contador] + " é impar")
        total_impares++;
    }
    //contador fora do if/else pra não geral looping infinito etrazer um resultado inesperado
    contador++;

}

console.log("\n O total de números ímpares é: " + total_impares);
console.log(" O total de números pares é: " + total_pares);
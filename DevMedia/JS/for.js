let multiplicador = 8;

console.log("Tabuada de multiplicação do Nº " + multiplicador);

//Inicialização da variavel; condição; incremento

/*
-A variavel contador é iniciada com o contador 0
-O bloco de código sera repitido enquanto a variavel contador for <= 10
-Ao final de cada repetição a varial contador é incrementada
*/

for ( let contador = 0; contador <= 10; contador++ ) {

    let resultado = multiplicador * contador;

    console.log( multiplicador + " x " + contador + " = " + resultado );

}
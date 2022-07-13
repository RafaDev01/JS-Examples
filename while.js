
//numero da tabuada
let numero = 3

//numero da tabuada será multiplicado pelo contador
let contador = 0

console.log('Tabuada de multiplicação - Nº ' + numero)

//Enquanto contador for <= 10 -> execute:
while (contador <= 10000) {
  let resultado = numero * contador

  console.log(numero + ' x ' + contador + ' = ' + resultado)

  contador++
}

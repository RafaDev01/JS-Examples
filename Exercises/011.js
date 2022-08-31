//Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e R$0,15 por Km rodado.

let diasAlugado = 8
let kmRodado = 720
let valorDiaAlugado = 60
let valorKmRodado = 0.15
let valorAluguel = (diasAlugado*valorDiaAlugado) + (kmRodado * valorKmRodado) 

console.log(`Total de dias alugado: ${diasAlugado}, total km rodado ${kmRodado}\nTotal a pagar:${valorAluguel}`)
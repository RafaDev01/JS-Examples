/*  
  Crie um programa que leia o nome completo de uma pessoa e mostre: 
- O nome com todas as letras maiúsculas e minúsculas.
- Quantas letras ao todo (sem considerar espaços).
- Quantas letras tem o primeiro nome.
*/

let nome = 'Rafael do Nascimento Santos'

console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
console.log(nome.replace(/ /g, "").length)
let primeiroNome = nome.split(' ')[0]
console.log(primeiroNome)
console.log(primeiroNome.length)

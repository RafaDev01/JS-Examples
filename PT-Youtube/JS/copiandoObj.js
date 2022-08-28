//copiar OBJ

//Diferente dos tipos primitivos (string, boolean, number , etc) os objetos são copiados por referencia

//Exemplo com primitivos - variasveis são copiadas por valor

let nome1 = 'joao'
let nome2 = nome1

console.log(nome1)
console.log(nome2)

nome2 = 'ana'

console.log(nome1)
console.log(nome2)

//Exemplo com objetos

const cliente1 = {
  nome: 'joao'
};

const cliente2 = cliente1; //Objetos são copiados por referencia, os 2 apontam para o mesmo local na memoria

cliente1.nome = 'mudar'

//Como os dois apontam para o mesmo local quando alteramos o nome do cleinte1 o cliente 2 tambem foi afetado
console.log(cliente2.nome)





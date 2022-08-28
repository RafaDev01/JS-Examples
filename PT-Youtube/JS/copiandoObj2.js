let usuario1 = {
  nome: 'marcelo'
}

let usuario2 = {};

//copiando o usuario1 no usuario2  em locais diferentes na memória
Object.assign(usuario2,usuario1);

usuario2.nome = 'Osvaldo'

console.log(usuario1)
console.log(usuario2)


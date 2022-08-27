let alunos = [
  {id: 1, nome: "Bruna", media: 8},
  {id: 2, nome: "Laura", media: 7},
  {id: 3, nome: "José", media: 5},
  {id: 4, nome: "Guilherme", media: 4},
  {id: 5, nome: "Rafael", media: 10},
];

let contador = 0;

//While percorrendo a coleção de objetos
while ( contador < alunos.length ) {

  let aluno = alunos[contador];

  contador++;

  //Se a média do aluno for menor que 6 então a execução atual do contador irá pular
  if ( aluno.media < 6 ) {
      continue;
  }

  //se o if acima não for executado então o laço atual continua
  console.log("Id: " + aluno.id);
  console.log("Nome: " + aluno.nome);
  console.log("Média: " + aluno.media);
  console.log("\n");

}
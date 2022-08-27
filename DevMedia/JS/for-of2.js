let clientes_array = [
  {id: 1, nome: "Mônica", telefone: "99999-6565"},
  {id: 2, nome: "Tânia", telefone: "99999-0778"},
  {id: 3, nome: "Carlos", telefone: "99999-0551"}
];

//percorrendo o array
//cada objeto do array será atribuído a variável cliente após cada iteração
for ( let cliente of clientes_array ) {

  //guardando os valores das propriedades dos objetos em variaveis
  let nome = cliente.nome;
  let telefone = cliente.telefone;

  console.log("Nome: " + nome + " - Telefone: " + telefone);

}
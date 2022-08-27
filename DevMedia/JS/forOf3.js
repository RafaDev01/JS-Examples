let produtos_array = [
  { id: 1, nome: "mouse", preco: 50 },
  { id: 2, nome: "teclado", preco: 90 },
  { id: 3, nome: "monitor", preco: 350 },
  { id: 4, nome: "nobreak", preco: 600 },
];

let percentual_desconto = 10;

//Percorrendo o array para imprimir o novo preço dos produtos
for ( let produto of produtos_array ) {

  //guardando o nome e o preco dos produtos em variaveis
  let nome = produto.nome;
  let preco = produto.preco;

  //calculando o valor do desconto e o novo preço do produto
  let valor_desconto = (preco * percentual_desconto) / 100;
  let novo_preco = preco - valor_desconto;

  console.log("Novo valor do produto " + nome + ": R$" + novo_preco + ",00");

}
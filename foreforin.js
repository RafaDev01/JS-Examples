let produtos = [
  { id: 1, nome: "pizza", preco: 50 },
  { id: 2, nome: "macarronada", preco: 25 },
  { id: 3, nome: "lasanha", preco: 45 },
  { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;

//Com a estrutura for vamos percorrer os objetos de um array. E a estrutura for .. in será usada para percorrer as propriedades de cada objeto.
for ( let contador = 0; contador < produtos.length; contador++ ){

  let produto = produtos[contador];

  for ( let propriedade in produto ){
      
      if ( propriedade == "preco" ) {

          let preco = propriedade;

          let novo_preco = produto[preco] - desconto;

          console.log("preço atualizado: R$" + novo_preco + ",00");

      } else {

          console.log(propriedade + ": " + produto[propriedade]);
      }

  }

  console.log("\n");
}
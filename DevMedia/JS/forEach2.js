const carrinho = [
  {  nome: 'The Legend of Zelda', qnt: 3, valor: 250 },
  {  nome: 'Super Mario Kart 8', qnt: 2, valor: 300 },
  {  nome: 'New Super Mario Bros.', qnt: 1, valor: 250 }
];

//total precisa ser declarado fora do loop para não reiniciar o valor
let total = 0;
function imprimirItem( produto, index ) {
  total += produto.qnt * produto.valor;
  let texto = index + ' - ';
  texto += produto.qnt + ' UN - ';
  texto += produto.nome + ' - ';
  texto += 'R$ ' + produto.valor + ' - ';
  texto += 'R$ ' + produto.qnt * produto.valor;
  console.log( texto + "\nTotal a pagar: R$" + total  );
}

carrinho.forEach(imprimirItem);
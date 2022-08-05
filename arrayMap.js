const carros = [
  { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
  { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
  { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
  { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];

function retornaCarro(carro) {
  return carro.marca + ' ano: ' + carro.anoFabricacao;
}

//Map retorna um novo array com o retorno dentro da função
const novosCarros = carros.map(retornaCarro);

console.log(novosCarros);

//Apenas retirar uma parte do obj

let empresa = {
  nome: 'microsoft',
  area: 'software',
  produtos: [
    'Win 11',
    'Azure',
    'Office 365',
    'Minecraft'
  ]
}

//E ainda podemos usar o rest ...

let {nome, ...outras_propriedades} = empresa
let {produtos} = empresa
console.log(nome)
console.log(produtos)
console.log(outras_propriedades)
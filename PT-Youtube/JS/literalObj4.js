const zonas = {
  4: 'Armazen',
  2: 'Fábrica',
  3: 'Escritório',
  1: 'Loja'
}

//se as propriedades estiverem definidas com valores numericos automaticmente elas ficarão ordenadas
for (key in zonas) {
  console.log(key)
}
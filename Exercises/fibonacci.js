function fibonacci(valor){
  let anterior = 0
  let atual = 1
  let proximo = 1
  
for(let i = 0; i < valor; i++){
  console.log(atual);
  anterior = atual + proximo;
  atual = proximo;
  proximo = anterior;
}
}


fibonacci(100)
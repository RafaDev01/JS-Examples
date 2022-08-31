// O professor quer sortear a ordem de apresentação de trabalhos dos alunos. Faça um programa que leia o nome dos quatro alunos e mostre a ordem sorteada.

let alunos = ['Ana','Beatriz','Carol','Davi','Erick','Fernando','Gabriel','Heitor','Iara']  
let apresentação = [];
let ordem = []

function sorteado(){
  return Math.floor(Math.random(alunos)*alunos.length)
}

while(ordem.length <= alunos.length - 1) {

    if(ordem.indexOf(alunos) === -1){
      ordem.push(sorteado()); 
    }
   
  }

  console.log(ordem)
  


/*  while(apresentação.length <= alunos.length - 1) {
  let sorteado = Math.floor(Math.random(alunos)*alunos.length)
  //if(apresentação.indexOf(alunos[sorteado]) == 0){
    apresentação.push(alunos[sorteado]) 
    console.log(apresentação.indexOf(alunos[sorteado]))
  }
 */




let alunos = ["Diogo","Carlos","Danilo","Pedro","César"];

let contador = 0;
//Percorre o array...
while ( contador < alunos.length ) {

    let aluno_nome = alunos[contador];
    
    //E imprime o nome do aluno no indice atual do array que está sendo apontado pelo contador
    console.log( "Aluno: " + aluno_nome );
    contador++;

}
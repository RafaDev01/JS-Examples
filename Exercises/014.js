// Um professor quer sortear um dos seus quatro alunos para apagar o quadro. Faça um programa que ajude ele, lendo o nome dos alunos e escrevendo na tela o nome do escolhido.


let alunos = ['Ana' , 'Beatriz' , 'Pedro' , 'João']
let alunoEscolhido = Math.round(Math.random(alunos)*3)

console.log(alunos[alunoEscolhido]);
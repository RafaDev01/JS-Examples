let aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25 };

// a estrutura for in percorre o objeto
//dados representa a prorpiedade do obejto que está sendo iterada
for ( let dados in aluno ) {
    console.log(aluno[dados]);
}

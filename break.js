let funcionarios = [
  {id: 1, nome: "César", habilitado: false},
  {id: 2, nome: "Jéssica", habilitado: false},
  {id: 3, nome: "Renan", habilitado: false},
  {id: 4, nome: "Marlon", habilitado: true},
  {id: 5, nome: "Ana", habilitado: true}
];

let contador = 0;
let encontrouHabilitado = false;

//percorrendo todo o array
while ( contador < funcionarios.length ) {

  //funcionario recebe o objeto no indice atual percorrido
  let funcionario = funcionarios[contador];

  //se o funcionario tiver habilitado == verdadeiro executará o comando do if e irá parar de percorrer o objeto
  if( funcionario.habilitado == true ){
      console.log("Funcionário habilitado encontrado: " + funcionario.nome);
      encontrouHabilitado = true;
      //break pra parar o while mesmo sem o contador chagar ao fim
      break;
  }

  contador++;
}

//caso não tenha ebcontrado ninhuem habilitado após percorrer o objeto:
if (!encontrouHabilitado) {
  console.log("Nenhum funcionário habilitado encontrado");
}
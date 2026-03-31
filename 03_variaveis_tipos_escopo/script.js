// Exemplo var com valor alteravael
for (var i = 0; i < 3; i++) {
  console.log(i);
}

// Exemplo let rcom valor alteravael
for(let i = 0; i < 5; i++){
  console.log(`${i+1}º 67`);
}

// Exemplo const com valor inalteravael
const nome = 'vini';
for(let i = 0; i < 2; i++){
  console.log(`Olá ${nome}!`);
}

//Exemplo variável fora do bloco
if (true){
  var mensagem = "Bahh gurizada!";
}

console.log(mensagem);

// Exemplo variável que não pode ser acessado fora do bloco

if(true){
  let turma = "DSM4";
  console.log(turma); //Pode ser usada dentro do bloco
}

console.log(turma); //Não pode ser usada dentro do bloco porconta do escopo da variável estar dentro do bloco do if
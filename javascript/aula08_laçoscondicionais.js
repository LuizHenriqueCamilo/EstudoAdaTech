//! laços condicionais "estrutura de repetição"
//Não controlada
//* While -> enqanto, Do-while

const prompt = require("readline-sync");
const saldo01 = prompt.question("Qual é o seu saldo? ");
console.log(saldo01, typeof saldo);

ou;

// if estrututura de repetição que se repete apenas um vez, repete apenas uma unica vez
const prompt = require("readline-sync");
let saldo2 = Number(prompt.question("Qual é o seu saldo? "));

if (saldo2 < 0) {
  saldo2 = Number(
    prompt.question("Saldo Invalido! Por Favor Digite novamente: ")
  );
}
console.log(saldo);

// repetição não controlada "Repete varias vezes ate concluir as condiçoes 'loopin '"

const prompt = require("readline-sync");
let saldo = Number(prompt.question("Qual é o seu saldo? "));

while (saldo < 0) {
  saldo = Number(
    prompt.question("Saldo Invalido! Por Favor Digite novamente: ")
  );
}
console.log(saldo);

//obs: cuidado com loops infinito
const prompt = require("readline-sync");
let notaDoAluno = Number(prompt.question("Informe a nota do aluno: "));
let somaDasNota = 0; //variavel acumulador
let qtdDenotasValidas = 0; //contador
while (notaDoAluno >= 0) {
  somaDasNota = somaDasNota + notaDoAluno; // incremento acumulador
  // somaDasNotas += notaDoAluno -> sintax mais enxuta do codigo acima
  qtdDenotasValidas = qtdDenotasValidas + 1;
  //qtdDeNotasValidas++ -> sintax de contadoro mais enxuta do codigo acima "pos encremmento"
  notaDoAluno = Number(prompt.question("informe a proxima nota: "));
}
console.log("Soma das notas: ", somaDasNota);
console.log("Notas Valida: ", qtdDenotasValidas);
console.log("Media das notas: ", somaDasNota / qtdDenotasValidas);
console.clear();

//*exeplo

const prompt = require("readline-sync");
const numeroAleatorio = parseInt(Math.random() * 10);
let quantidadeDeTentativa = 0;
let numeroDoUsuario = Number(prompt.question("imforme um numero de 1 a 10: "));

while (numeroAleatorio == !numeroDoUsuario) {
  console.log("Numero Errado tente outra vez!: ");
  numeroDoUsuario = Number(prompt.question("Informe um numero entre 0 10: "));
  qtdDenotasValidas++;
}
console.log("vc tentou ", quantidadeDeTentativa, "vezes");
console.log("Parabens voçê acertou!");
console.clear();

let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;

  if (contador == 2) {
    continue; //força o codigo voltar pro inicio do loop, break pra encerra a execução
  }
  console.log("Depois do if....");
}

//do-whille
//obs

const prompt = require("readline-sync");
let saldo4;

do {
  saldo4 = Number(prompt.question("Informe seu Saldo: "));
} while (saldo < 0);
console.log(saldo4);

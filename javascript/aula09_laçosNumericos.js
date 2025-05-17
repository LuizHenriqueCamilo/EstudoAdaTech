const prompt = require("readline-sync");
//for -> "Para" -> estrutura de repetição controlada
//! estrutura do "for"
/**
expressão 1; inicialização da variavel
expressão 2; condição de parada do "for" codição de permanencia do "for" definição que define a parada do for
expressão 3; o incremento da variavel de controle

let i;
for(expressão 1; expressão 2; expressão 3){
  escopo do for
}

*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.clear(); //limpa do codigo anterior

//* Exemplo

const prompt = require("readline-sync");

let maiorNumero = 0;
let numeroInformado;

for (let i = 1; i <= 5; i++) {
  numeroInformado = Number(prompt.question("Informe um numero postivo: "));

  if (numeroInformado > maiorNumero) {
    maiorNumero = numeroInformado;
  }
}
console.log("Maior Numero: ", maiorNumero);
console.clear();

//* Exemplo: percorrendo string com "for"

const nome = "luiz";

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}
console.clear();

//* Arrays
/**
 const nota01 = 10;
 const nota01 = 8;
 const nota01 = 5;
            ou
 const notasDosAlunos = [10,8,5]
 */

const notasDosAlunos = [10, 8, 5];
const pessoa = ["Luiz", 30, 1.8, true];

console.log(notasDosAlunos);
console.log(pessoa);
console.log(pessoa[1]); //Percorendo um elemento do Array
pessoa[3] = false; //mudar um elemento dentro so Array
console.log(pessoa);
console.log(pessoa.length); //obter o tamando do Array
console.clear();

//fatiamento de Array "Slice"
const numeros = [40, 34, 67, 89, 23, 10];
console.log(numeros.slice(0, 2));
console.clear();
//Adicionando elemento no final do array "push"
numeros.push(0);
console.log(numeros);
console.clear();
//adicionando elemento no inicio do array "unshift"
numeros.unshift(-1);
console.log(numeros);
console.clear();
//remover elemento no final do array"pop"
numeros.pop;
console.log(numeros);
console.clear();
//remover elemento no inicio do array "shift"
numeros.shift;
console.log(numeros);
console.clear();
//será que o elemento 20 existe no array
console.log(numeros.includes(20));
console.log(numeros.includes(10));

if (numeros.includes(10)) {
  console.log("Opa! exite no numero 10 dentro do array de numeros ");
} else {
  console.log("Não existe o numero 20 no array de numeros.");
}
const existeOnNumero20 = numero.includes(20);

console.clear;

//* indexOf procura o primeiro numero solicitado

const indiceDoElemento10 = numero.indexOf(20);
console.log(indiceDoElemento10);

//* lastIndexOf "procura ao contrario"

const indiceDoElemento40 = numero.indexOf(20);
console.log(indiceDoElemento40);

//* percorer array com "for"

const arr = [45, 36, 90, 76, 32, 7];
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}
console.clear();

//* for-of permite percorrer os elementos dos objetos
//* no java o array é um objeto

for (const elemento of arr) {
  console.log(elemento);
}
console.clear();

//* for-in percorre os indices do objetos
// esse indice sempre vai ser uma string

for (const indices in arr) {
  console.log(indices);
}
console.clear();

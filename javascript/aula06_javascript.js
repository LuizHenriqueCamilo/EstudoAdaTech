var nomeDoAluno = "luiz"; //tipo string, nomeDoAluno conhecido como "camel Case"
var idade = 30; //number int
var altura = 1.72; // nunber
var estudante = true; // tipo bolean =  verdadeiro ou false
// javascript tem tipagem dinamica não diferencias os tipo de variavel, ele infere os tipo de dados.
// javascript tem uma tipagem fraca

console.log(nomeDoAluno);
console.log(idade);
console.log(altura);
console.log(estudante);

// type of pra distiguir qual tipo de variavel

console.log(typeof nomeDoAluno);

// imprimir mais de um dado no consol.log
console.log(nomeDoAluno, typeof nomeDoAluno);
console.log(idade, typeof idade);
console.log(altura, typeof altura);
console.log(estudante, typeof estudante);

var semConteudo; // variavel declarada porem sem valor declarado "undefiend"

console.log(semConteudo);

// declarando mais de uma variavel em uma mesma linha
var curso = "Front-End",
  topico = "Javascript Básico";

console.log(curso, topico);

// tipo de variavel, melhor usada, "Obs: não use var nos codigos"

var test; //escopo global permitindo alguns bug "rosting"
let nota = 10; // variavel escopada variavel que permite alteração
const média = 8; //variavel que não pode ser alterada

nota = 8;
media = 5; // const não permite essa ateração

console.log(nomeDoAluno, media);

//operadore matematicos

const nota01 = 10;
const nota02 = 8;
const somaDasnotas = nota01 + nota02;
console.log(somaDasnotas);

let media = somaDasnotas / 2;
console.log(media);

// outra forma de calcular
let outaMedia = (nota01 + nota02) / 2;
console.log(outaMedia);

//Biblioteca math "funções matematicas"

const numero = 16;
//exeplo de como calcular raiz quadrada
console.log("Raiz quadrada de 16 = ", Math.sqrt(numero));

//"Math = biblioteca", ".sqrt = metodo ou função"

//! otra forma de usar o Math
const raizDoNumero = Math.sqrt(numero);

console.log("Raiz do numero = ", raizDoNumero);

// etrada de dados
//  
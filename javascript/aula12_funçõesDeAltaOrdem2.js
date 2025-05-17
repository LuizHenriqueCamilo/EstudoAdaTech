//* every() = verifica se todos elementos de um array respeita ou segue uma determinda condição retornada.
//* Array.prototype.every

const fs = require("fs");

const numeros0 = [40, 34, 67, 89, 23, 10];

const pessoa = [
  {
    nome: "pessoa 1",
    idade: 34,
    altura: 1.77,
  },
  {
    nome: "pessoa 2",
    idade: 25,
    altura: 1.56,
  },
  {
    nome: "pessoa 3",
    idade: 46,
    altura: 1.82,
  },
];

const todosPositivo = numeros0.every((elemento) => elemento > 0);

console.log(todosPositivo);
// todos os elemento deste array é positivo? "true

const todosMaioresDeIdade = pessoa.every(
  (pessoa) => pessoa.idade >= 18 && pessoa.altura >= 1.7
);
console.log(todosMaioresDeIdade);
console.clear();

//*some = verifica se algum elemento do array verifica ou torna verdadeira uma determinda condição.
//*Array.prototype.some

const numero2 = [-1, 3, 7, -3, 5];
const retorno = numero2.some((numero) => numero > 0);
console.log(retorno);
console.clear();

//* map() = um metodo do array que chama uma função que passada como parametro para cada elemento do array e devolve um novo array como resultado."remapear"
//*Array.prototype.map

const numeros = [40, 34, 67, 89, 23, 10];

const novoArray = numeros.map((elemento) => {
  return elemento * 2;
});
console.log(novoArray);
console.clear();

// exemplo 2: elevando todos numeros ao quadrado

const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];
const valoresAoQuadrado = valores.map((valor) => valor ** 2);
console.log(valoresAoQuadrado);
console.log();

//exemplo 3: adicone uma proproedade aos objetos do array

const carrinho = [
  { produto: "feijão", preco: 7.98, quantidade: 3 },
  { produto: "feijão", preco: 4.98, quantidade: 5 },
  { produto: "feijão", preco: 6.99, quantidade: 2 },
];

const total = carrinho.map((itemDoCarrinho) => {
  return {
    ...itemDoCarrinho,
    total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
  };
});
console.log(total);
console.log();
//* filter() = filtro em detereminada condições
//* Array.prototype.filter

const valoresLet = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const paresEncontrado = valoresLet.filter((valor) => valor % 2 === 0);
console.log(paresEncontrado);
console.clear();

const aluno = [
  { nome: "Luiz", media: 96 },
  { nome: "Naynane", media: 84 },
  { nome: "Carlos", media: 100 },
  { nome: "Beatriz", media: 65 },
  { nome: "Maria", media: 72 },
];

const mediaMaiorDe80 = aluno.filter((media) => media.media > 85);
console.log(mediaMaiorDe80);

const produto = [
  { nome: "Suco de laranja", preco: 7.85, tipo: "bebida" },
  { nome: "Batata Frita", preco: 10.5, tipo: "comida" },
  { nome: "Pizza", preco: 12.49, tipo: "comida" },
  { nome: "chocolate", preco: 1.5, tipo: "comida" },
  { nome: "Pastel", preco: 4.5, tipo: "comida" },
  { nome: "Coca cola", preco: 6.99, tipo: "bebida" },
  { nome: "Pastel", preco: 4.5, tipo: "comida" },
  { nome: "Coca cola", preco: 6.99, tipo: "bebida" },
  { nome: "Lanche", preco: 29.9, tipo: "comida" },
  { nome: "Cerveja", preco: 4.99, tipo: "bebida" },
];

const comidaMenorQue10 = produto.filter(
  (produto) => produto.preco < 10 && produto.tipo === "Bebida"
);
console.log(comidaMenorQue10);
console.clear();

//* reduce() = reduuzir " posui quareo paremetro o primeiro é um acumulador"
//*Array.prototype.reduce

const numeroReduce = [1, 2, 3, 4, 5];

const soma = numeroReduce.reduce((acumulador, elemento) => {
  return elemento + acumulador;
}, 0);


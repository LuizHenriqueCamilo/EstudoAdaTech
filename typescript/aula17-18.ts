console.log("helow wold Aula 17 - 18");
//Obejtos Otimizado "Customizado"
//modelando um objeto com interface, ou seja, definindo o padrão que o objeto deve seguir.
//O padrão é definido através de uma interface, onde definimos os atributos e seus tipos.
//A interface é uma forma de garantir que os objetos criados sigam um padrão específico, facilitando a manutenção e a leitura do código.
interface Person {
  nome: string;
  idade: number;
  altura: number;
  peso: number;
  empregado?: boolean; //? "?" significa que o atributo é opcional
}
// os obejetos abaixos são do tipo Person segue o padrão definido acima, com todos os atributos obrigatórios e o opcional.
const pessoa1: Person = {
  nome: "Lucas",
  idade: 20,
  altura: 1.8,
  peso: 70,
  empregado: true,
};
const pessoa2: Person = {
  nome: "Maria",
  idade: 25,
  altura: 1.65,
  peso: 60,
  empregado: false,
};
console.log(pessoa1, pessoa2);

//obejeto type pode ser qualquer coisa, ou seja, não é necessário seguir um padrão específico. O type é mais flexível que a interface, mas menos restritivo.
//tipo generico
//alguns recursos do type não tem na interface, como o uso de tipos primitivos, união de tipos e tipos literais.
//e alguns recursos da interface não tem no type, como herança e implementação de classes.
type Criterio = {
  nome: string;
  idade: number;
  altura: number;
  Profisão?: boolean;
};

const outraPessoa: Criterio = {
  nome: "Lucas",
  idade: 20,
  altura: 1.8,
  Profisão: true,
};

const outraPessoa2: Criterio = {
  nome: "Maria",
  idade: 25,
  altura: 1.65,
  Profisão: false,
};
console.log(outraPessoa, outraPessoa2);
//O type é mais flexível que a interface, mas menos restritivo. O type é mais utilizado para tipos primitivos, união de tipos e tipos literais, enquanto a interface é mais utilizada para objetos e classes.
//O type é mais utilizado para tipos primitivos, união de tipos e tipos literais, enquanto a interface é mais utilizada para objetos e classes.

//* union type
//*Tipos alaises
type criterio2 = "greater" | "lower"; // união de tipos, ou seja, o tipo pode ser "greater" ou "lower"
//a função chooseNumber recebe dois números e um critério, que pode ser "greater" ou "lower".
function chooseNumber(
  num1: number,
  num2: number,
  criterio2?: "greater" | "lower"
): void | number {
  switch (criterio2) {
    case "greater":
      return num1 > num2 ? num1 : num2; //retorna o maior número
    case "lower":
      return num1 < num2 ? num1 : num2; //retorna o menor número
    default:
      const randomNumber = Math.random(); //retorna um número aleatório entre 0 e 1
      if (randomNumber < 0.5) {
        return num1; //retorna o primeiro número
        return num2; //retorna o segundo número
      }
  }
}
//função que retorna um número aleatório entre dois números
//a função recebe dois números como parâmetro e retorna um número aleatório entre eles.
const numeroescolhido = chooseNumber(10, 20, "lower"); // retorna um número aleatório entre 10 e 20
console.log("numero escolhido:", numeroescolhido); // retorna um número aleatório entre 10 e 20
//!obs: sempre que usa inferface, começe sentença com letra maiuscula "Person e Criterio".

function somar(number: number, number2: number): number {
  return number + number2; //retorna a soma dos dois números
}
somar(10, 20); //retorna 30

//*Utility Types

//*Partial = O Partial é um tipo utilitário que torna todos os atributos de um objeto opcionais. Ou seja, ele transforma todos os atributos de um objeto em opcionais, permitindo que você crie objetos que não precisam ter todos os atributos definidos.

type PersonPartial = Partial<Person>; //transforma todos os atributos de Person em opcionais
const outraPessoaessoa: PersonPartial = {
  nome: "Lucas",
  idade: 20,
}; //pode ter apenas alguns atributos, pois todos são opcional

//*Required = O Required é um tipo utilitário que torna todos os atributos de um objeto obrigatórios. Ou seja, ele transforma todos os atributos de um objeto em obrigatórios, permitindo que você crie objetos que precisam ter todos os atributos definidos.

type PersonRequired = Required<Person>; //transforma todos os atributos de Person em obrigatórios

//*Pick = O Pick é um tipo utilitário que permite selecionar apenas alguns atributos de um objeto. Ou seja, ele permite que você crie objetos que só têm alguns dos atributos de um objeto original.

type PersonPick = Pick<Person, "nome" | "idade">; //seleciona apenas os atributos nome e idade de Person

//*Omit = O Omit é um tipo utilitário que permite excluir alguns atributos de um objeto. Ou seja, ele

type PersonOmit = Omit<Person, "nome" | "idade">; //exclui os atributos nome e idade de Person

//*Exclude = O Exclude é um tipo utilitário que permite excluir alguns tipos de um tipo. Ou seja, ele permite que você crie tipos que não têm alguns dos tipos de um tipo original.

type ExcludeType = Exclude<"a" | "b" | "c", "a">; //exclui o tipo "a" do tipo "a" | "b" | "c"
//Extract = O Extract é um tipo utilitário que permite extrair alguns tipos de um tipo. Ou seja, ele permite que você crie tipos que só têm alguns dos tipos de um tipo original.

//*Record = O Record é um tipo utilitário que permite criar um objeto com chaves e valores de tipos específicos. Ou seja, ele permite que você crie objetos que têm chaves e valores de tipos específicos.

type PersonRecord = Record<"nome" | "idade", string | number>;

type Pessoas = Record<string, Person>; //cria um objeto com chaves string e valores do tipo Person> //cria um objeto com chaves nome e idade e valores do tipo Person

const pessoas: Pessoas = {
  "Qualquer Coisa": {
    nome: "Lucas",
    idade: 20,
    altura: 1.8,
    peso: 70,
  },
  "Qualquer Coisa 2": {
    nome: "Maria",
    idade: 25,
    altura: 1.65,
    peso: 60,
   }  
};
   
//*Omit = O Omit é um tipo utilitário que permite excluir alguns atributos de um objeto. Ou seja, ele permite que você crie objetos que não têm alguns dos atributos de um objeto original.

type PersonOmit2 = Omit<Person, "nome" | "idade">; //exclui os atributos nome e idade de Person

//*Readonly = O Readonly é um tipo utilitário que torna todos os atributos de um objeto somente leitura. Ou seja, ele transforma todos os atributos de um objeto em somente leitura, permitindo que você crie objetos que não podem ser alterados.

type PersonReadonly = Readonly<Person>; //transforma todos os atributos de Person em somente leitura

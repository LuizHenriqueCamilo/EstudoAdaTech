//* Como selecionar elemento do HTMLn da nossa página ultilizando o document.
//! seletor pelo nome da tag HTML
document.getElementsByTagName("H1"); // comando para selecionar  todos os H1 da página
const todosH1s = document.getElementsByTagName("H1"); // Seleciona todos os H1 da página, atribuindo a variável todosH1s
console.log(todosH1s); // Mostra todos os H1 no console
console.log(todosH1s[0]); // Mostra o primeiro H1 no console

document.getElementsByTagName("p"); // comando para selecionar todo os "p" da página
const todosPs = document.getElementsByTagName("p"); // Seleciona todo os "p" da página, atribuindo a variável todosPs
console.log(todosPs); // Mostra todos os "p" no console na pagina web.
console.log(todosPs[1]); // Mostra o segundo "p" no console na pagina web.

//! 2. Seletor pela classe
const todosClasseP = document.getElementsByClassName("paragrafo"); // Seleciona todos os elementos com a classe "paragrafo", atribuindo a variável todosClasseP
console.log(todosClasseP); // Mostra todos os elementos com a classe "paragrafo" no console na pagina web.
console.log(todosClasseP[0]); // Mostra o primeiro elemento com a classe "paragrafo" no console na pagina web.
console.log(todosClasseP[1]); // Mostra o segundo elemento com a classe "paragrafo" no console na pagina web.

//! 3. atributo name ta tag HTML
const emailImput = document.getElementsByName("email"); // Seleciona todos os elementos com o atributo name "email", atribuindo a variável emailInput
console.log(emailImput); // Mostra todos os elementos com o atributo name "email" no console na pagina web.

//! 4. Seletor pelo ID
const idH1 = document.getElementById("paragrafo1"); // Seleciona o elemento com o ID "titulo", atribuindo a variável idH1
console.log(idH1); // Mostra o elemento com o ID "titulo" no console na pagina web.
const idH2 = document.getElementById("paragrafo2"); // Seleciona o elemento com o ID "titulo", atribuindo a variável idH2
console.log(idH2); // Mostra o elemento com o ID "titulo" no console na pagina web.
//! 5. Seletor por querySelector
const imagem = document.querySelector("body > img"); // Seleciona o elemento "img" dentro do "body", atribuindo a variável imagem
console.log(imagem); // Mostra o elemento "img" no console na pagina web.
const imagem2 = document.querySelector("body > img#img2"); // Seleciona o elemento "img" dentro do "body", atribuindo a variável imagem2
console.log(imagem2); // Mostra o elemento "img" no console na pagina web.
const imagem3 = document.querySelector("body > img#img3"); // Seleciona o elemento "img" dentro do "body", atribuindo a variável imagem3
console.log(imagem3); // Mostra o elemento "img" no console na pagina web.
//querySelector puxa apenas o primeiro elemento que ele encontra na página, se houver mais de um elemento com a mesma classe ou ID, ele irá puxar apenas o primeiro.
//! 6. Seletor por querySelectorAll
// querySelectorAll puxa todos os elementos que ele encontra na página, se houver mais de um elemento com a mesma classe ou ID, ele irá puxar todos.
const todosPs2 = document.querySelectorAll("p"); // Seleciona todos os elementos "h1", atribuindo a variável todosH1s2
console.log(todosPs2); // Mostra todos os elementos "p" no console na pagina web.

const todosH1s2 = document.querySelectorAll("h1"); // Seleciona todos os elementos "h1", atribuindo a variável todosH1s2
console.log(todosH1s2); // Mostra todos os elementos "h1" no console na pagina web.

console.clear(); // Limpa o console na pagina web.

const primeiroParagrafo = document.querySelector("p.paragrafo#paragrafo1"); // Seleciona o primeiro elemento "p", atribuindo a variável primeiroParagrafo
console.log(primeiroParagrafo); // Mostra o primeiro elemento "p" no console na pagina web.

//conteudo do primeiro paragrafo
console.log("Conteudo do primeiro paragrafo:", primeiroParagrafo.textContent); // Mostra o conteudo em texto do primeiro elemento "p" no console na pagina web.

// ignora qualque outra tag HTML que tenha dentro do paragrafo, apenas mostra o conteudo em texto.
const segundoParagrafo = document.querySelector("p.paragrafo#paragrafo2"); // Seleciona o segundo elemento "p", atribuindo a variável segundoParagrafo
console.log("Conteudo do segundo paragrafo:", segundoParagrafo.innerHTML); // Mostra o conteudo em HTML do segundo elemento "p" no console na pagina web.
// innerHTML mostra o conteudo em HTML do segundo elemento "p" no console na pagina web, incluindo qualquer outra tag HTML que tenha dentro do paragrafo.

//alterando o conteudo do primeiro paragrafo
primeiroParagrafo.textContent = "Novo conteudo do primeiro paragrafo"; // Altera o conteudo em texto do primeiro elemento "p" para "Novo conteudo do primeiro paragrafo"
//textContent altera o conteudo e considera tudo como texto, ignorando qualquer tag HTML que tenha dentro do paragrafo e estilização.
segundoParagrafo.innerHTML =
  "<strong>Conteudo do segundo paragrafo alterado</strong>"; // Altera o conteudo em HTML do segundo elemento "p" para "<strong>Conteudo do segundo paragrafo alterado</strong>"
//innerHTML altera o conteudo e considera tudo como HTML, incluindo qualquer tag HTML que tenha dentro do paragrafo e estilização.

console.clear(); // Limpa o console na pagina web.

//*vallue é o valor que o usuario digita no input, ou seja, o valor que ele coloca dentro do input.
emailImput[0].value = "LuizHenrique@email.com"; // Altera o valor do primeiro elemento com o atributo name "email" para "Novo valor do input".
//value altera o valor do input, ou seja, o valor que o usuario digita no input, ou seja, o valor que ele coloca dentro do input.

// //* adicionando um novo elemento na página
// criando um novo elemento na pagina

document.createElement("li"); // cria um novo elemento "li" na pagina, mas não adiciona ele na pagina.
const novaTagLi = document.createElement("li"); //* 1. cria um novo elemento "li" na pagina, mas não adiciona ele na pagina.
console.log(novaTagLi); //* 2. Mostra o novo elemento "li" no console na pagina web.
// foi criado no codigo mas não foi adicionado na pagina ainda.
novaTagLi.textContent = "Novo elemento li"; //* 3. Altera o conteudo em texto do novo elemento "li" para "Novo elemento li"
const listUl = document.querySelector("ul#lista"); // Seleciona o elemento "ul" na pagina, atribuindo a variável listUl
//!document.appendChild(novaTagLi); //* 4. Adiciona o novo elemento "li" na pagina, dentro do body da pagina.
//appendChild adiciona o novo elemento "li" na pagina, dentro do body da pagina.
console.log(novaTagLi); //* 5. Mostra o novo elemento "li" no console na pagina web, dentro do body da pagina.

listUl.insertBefore(novaTagLi, listUl[1]); //* 6. Adiciona o novo elemento "li" na pagina, antes do elemento "ul" na pagina.

//remover elemento
//removechild remove o elemento da pagina, mas não remove ele do codigo.
listUl.removeChild(listUl[1]); //* 7. Remove o segundo elemento "li" da lista "ul" na pagina, mas não remove ele do codigo.

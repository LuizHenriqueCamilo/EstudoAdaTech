console.log("Aula 21");

const buttonAumentar = document.querySelector("#aumentar-botão"); // selecionando o botão com id aumentar
const buttonDiminuir = document.querySelector("#diminuir-botão"); // selecionando o botão com id diminuir
const contadorElemento = document.querySelector("#contador"); // selecionando o elemento com id contador

buttonAumentar.addEventListener("click", (event) => {
  const contagemAtualizada = Number(contadorElemento.textContent);
  contadorElemento.textContent = contagemAtualizada + 1; // atualizando o texto do elemento contador

  buttonAumentar.classList.add("btn");
  buttonDiminuir.classList.remove("btn"); // removendo a classe btn do botão diminuir
}); // adicionando evento de click ao botão aumentar

buttonDiminuir.addEventListener("click", (event) => {
  const contagemAtualizada = Number(contadorElemento.textContent);
  contadorElemento.textContent = contagemAtualizada - 1; // atualizando o texto do elemento contador

  buttonDiminuir.classList.add("btn"); // adicionando a classe btn ao botão diminuir
  buttonAumentar.classList.remove("btn"); // removendo a classe btn do botão diminuir
}); // adicionando evento de click ao botão diminuir

//! Obs
const button = document.querySelector("#botão"); // selecionando o botão com id botão
// adicionando evento de click ao botão
button.addEventListener("click", (event) => {
  console.log(event); // evento que aconteceu
  alert("Clicou no botão"); // alerta que vai aparecer quando o botão for clicado
});
// Programaçãoorientada a a eventos, quando aquele evento aconteçer uma função vai ser chamada
const input = document.querySelector("#input"); // selecionando o input com id input
input.addEventListener("input", () => {
  console.log(imput.value); // valor do input
  // input.value = ""; // limpando o valor do input pega em tempo real oque o usuario ta digitando
}); // adicionando evento de input ao input

// adiciona stilos em line
contadorElemento.style.color = "red"; // mudando a cor do texto do elemento contador para vermelho
contadorElemento.style.fontSize = "50px"; // mudando o tamanho da fonte do elemento contador para 50px
contadorElemento.style.fontWeight = "bold"; // mudando a espessura da fonte do elemento contador para bold
contadorElemento.style.padding = "0 2rem"; // mudando o padding do elemento contador para 0 em cima e embaixo e 2rem nas laterais
contadorElemento.style.border = "1px solid black"; // mudando a borda do elemento contador para 1px solid black
contadorElemento.style.borderRadius = "10px"; // mudando o raio da borda do elemento contador para 10px
// adcionar css "nas classe"

// //manipular classes
// console.log(buttonDiminuir.classList); // mostrando as classes do botão diminuir
// //adicionando uma classe ao botão diminuir
// buttonDiminuir.classList.add("botão-diminuir"); // adicionando a classe botão-diminuir ao botão diminuir
// //removendo uma classe do botão diminuir
// buttonDiminuir.classList.remove("botão-diminuir"); // removendo a classe botão-diminuir do botão diminuir
// //verificando se o botão diminuir tem a classe botão-diminuir
// console.log(buttonDiminuir.classList.contains("botão-diminuir")); // mostrando se o botão diminuir tem a classe botão-diminuir
// //trocando a classe do botão diminuir
// buttonDiminuir.classList.toggle("botão-diminuir"); // trocando a classe do botão diminuir

//mudando o tema do site
const buttonTheme = document.querySelector("#theme"); // selecionando o elemento com id tema
let darktheme; // criando uma variavel tema com valor false

window.onload = () => {
  // quando a pagina carregar
  const isDarkTheme = localStorage.getItem("isDarkTheme"); // pegando o valor da variavel tema do local storage com a chave darktheme

  darktheme = isDarkTheme === "true"; // mudando o valor da variavel tema para true se o valor do local storage for true
  if (darktheme) {
    // se o valor da variavel tema for true
    buttonTheme.style.backgroundColor = "black"; // mudando a cor de fundo do botão tema para preto
    buttonTheme.style.color = "white"; // mudando a cor do texto do botão tema para branco
    document.body.style.backgroundColor = "black"; // mudando a cor de fundo do body para preto
  } else {
    // se o valor da variavel tema for false
    buttonTheme.style.backgroundColor = "white"; // mudando a cor de fundo do botão tema para branco
    buttonTheme.style.color = "black"; // mudando a cor do texto do botão tema para preto
    document.body.style.backgroundColor = "white"; // mudando a cor de fundo do body para branco
  }
  // mudando a cor de fundo do body para branco
};
buttonTheme.addEventListener("click", () => {
  darktheme = !darktheme; // mudando o valor da variavel tema para false

  localStorage.setItem("isDarkTheme", darktheme); // armazenando o valor da variavel tema no local storage com a chave darktheme
  // localStorage.getItem("darktheme"); // pegando o valor da variavel tema do local storage com a chave darktheme

  const body = document.querySelector("body"); // selecionando o elemento body

  if (darktheme) body.style.backgroundColor = "black";
  // mudando a cor de fundo do body para preto
  else body.style.backgroundColor = "white"; // mudando a cor de fundo do body para branco
}); // adicionando evento de click ao botão tema
// const body = document.querySelector("body"); // selecionando o elemento body

//web storage API
//client-side storage, armazenamento do lado do cliente, armazenamento local, armazenamento de sessão, cookies
//local storage armazenamento local, armazenamento de sessão, cookies
//session storage armazenamento de sessão, cookies dados armazenado durante a sessão do navegador, quando o navegador é fechado os dados são apagados
//cookies dados armazenado durante a sessão do navegador, quando o navegador é fechado os dados são apagados
// setitem(chave, valor ) adiciona um item ao armazenamento local, getitem(chave) pega o item do armazenamento local, removeitem(chave) remove o item do armazenamento local, clear() limpa o armazenamento local, length() mostra a quantidade de itens no armazenamento local

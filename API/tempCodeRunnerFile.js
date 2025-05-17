async function dadosDoCep() {
  try {
    const resposta = await fetch("https://viacep.com.br/ws/13872216/json/");
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.log("Erro", erro);
  } finally {
    console.log("fim.");
  }
}
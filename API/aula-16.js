// Fecht API

//the/catch
//fetch função pra api tipo promisse
fetch("https://viacep.com.br/ws/13872216/json/")
//.them se a reposta for sucesso
  .then((resposta) => {
    //resposta.jason()transfoma a reposta no formato jason
    //             .then() por que essa é uma função assincrona
    resposta.json().then((dados) => console.log(dados));
  })
  //.catch se a resporta for erro
  .catch((erro) => {
    console.log(erro);
  });

//async/await
async function dadosDoCep() {
  try {// try para lidar com erros
//                 =awaite por que é uma função assincrona
    const resposta = await fetch("https://viacep.com.br/ws/13872216/json/");
//                              .json para trasnformar o arqquivo em jason        
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) { // try e dpois  catch pata capturar o erro
    console.log("Erro", erro);
  } finally { // finally idenpendente da requisição ella sera finalizada
    console.log("fim.");
  }
}
dadosDoCep();

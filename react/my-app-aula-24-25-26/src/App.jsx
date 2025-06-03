import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar"; //importando o React e o componente Navbar
import { Article } from "./components/Article/Article";
//componente em classe é uma classe que herda a classe componente do React e retorna HTML dentro do método render.
import Article01 from "./assets/img/banner01.jpg";
import Article02 from "./assets/img/banner02.jpg";
import Article03 from "./assets/img/banner03.webp";
import Article04 from "./assets/img/banner04.jpg";
import { Counter } from "./components/Counter/counter";

class App extends React.Component {
  render() {
    //render medoto responsável por renderizar o componente
    return (
      <>
        <Navbar />
        <Counter />

        <section id="articles">
          <Article
            title="Designing Dashboard"
            provider="nasa"
            description="Mussum Ipsum, cacilds vidis litro abertis.  Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Morbi viverra placerat justo, vel pharetra turpis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per."
            thumbnail={Article01}
          />
          <Article
            title="exemplo2"
            provider="mussum"
            description="Mussum Ipsum, cacilds vidis litro abertis.  Atirei o pau no gatis, per gatis num morreus. Leite de capivaris, leite de mula manquis sem cabeça. Sapien in monti palavris qui num significa nadis i pareci latim. Cevadis im ampola pa arma uma pindureta."
            thumbnail={Article02}
          />
          <Article
            title="exemplo3"
            provider="mussum Ipsum"
            description="Mussum Ipsum, cacilds vidis litro abertis.  Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Cevadis im ampola pa arma uma pindureta. Delegadis gente finis, bibendum egestas augue arcu ut est. Manduma pindureta quium dia nois paga."
            thumbnail={Article03}
          />
          <Article
            title="exemplo4"
            provider="mussumzueria"
            description="Mussum Ipsum, cacilds vidis litro abertis.  Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Leite de capivaris, leite de mula manquis sem cabeça. Quem num gosta di mim que vai caçá sua turmis! Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus."
            thumbnail={Article04}
          />
        </section>
      </>
    );
  }
}
export default App;

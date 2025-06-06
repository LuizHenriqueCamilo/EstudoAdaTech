import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar"; //importando o React e o componente Navbar
import { Article } from "./components/Article/Article.jsx"; //componente em classe é uma classe que herda a classe componente do React e retorna HTML dentro do método render.
import { Counter } from "./components/Counter/counter";
import axios from "axios";
// import { timers } from "react-loader-spinner";
import { TailSpin } from "react-loader-spinner";

function App() {
  const [news, setNews] = useState([]); // criando um estado para armazenar as notícias
  useEffect(() => {
    async function loadNews() {
      try {
        const response = await axios.get(
          "https://api.spaceflightnewsapi.net/v3/articles"
        );
        setNews(response.data);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    }
    loadNews();
  }, []);
  //render medoto responsável por renderizar o componente
  return (
    <>
      <Navbar />
      <TailSpin
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={news.length === 0}
      />
      <section id="articles">
        {news.length === 0 && (
          <div className="loading-message">
            <p>Carregando notícias...</p>
          </div>
        )}
        {/* Verifica se o array de notícias está vazio antes de mapear */}
        {news.map((id, title, newsSite, summary, imageUrl, Article01) => (
          <Article
            key={id} // Usando o id como chave única para cada artigo
            title={title}
            provider={newsSite}
            description={summary}
            thumbnail={imageUrl || Article01} // Usando uma imagem padrão se imageUrl não estiver disponível
          />
        ))}
      </section>
      <Counter />
    </>
  );
}
export default App;

import React from "react";
import "./styles/App.css";
import Navbar from "./components/navbar/Navbar";
//componente em classe é uma classe que herda a classe componente do React e retorna HTML dentro do método render.
class App extends React.Component {
  render() {
    //render medoto responsável por renderizar o componente
    return <Navbar />;
  }
}
export default App;

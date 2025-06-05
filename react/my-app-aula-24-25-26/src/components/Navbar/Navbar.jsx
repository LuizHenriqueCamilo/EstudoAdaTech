import React from "react";
import logoImg from "../../assets/img/logo.webp";
import "./style.css";
// componente funcional é uma função que retorna HTML, não precisa herdar a classe componente do React
// e não possui estado interno, mas pode receber props como parâmetro.
function Navbar () {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img id="logo-img" src={logoImg} alt="/" />
            <h1 id="logo">Space Flight News</h1>
          </div>

          <ul className="nav-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Categories</a>
            </li>
            <li>
              <a href="/">Trending</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  
}
export default Navbar;

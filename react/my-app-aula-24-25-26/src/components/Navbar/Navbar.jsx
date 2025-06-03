import React from "react";
import logoImg from "../../assets/img/logo.webp";
import "./style.css";

class Navbar extends React.Component {
  render() {
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
}
export default Navbar;

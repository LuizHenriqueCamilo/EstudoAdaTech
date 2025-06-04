import React from "react";
import { Counter } from "./components/Counter";

class App extends React.Component {
  constructor() {
    super();

    this.state = { showCounter: false };
  }
  render() {
    return (
      <div
        style={{
          marginTop: "10rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Ciclo de vida do React</h1>

        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            margin: "20px 0",
          }}
          onClick={() => {
            this.setState({ showCounter: !this.state.showCounter });
          }}
        >
          {this.state.showCounter ? "Esconder" : "Mostrar"} contador
        </button>

        {this.state.showCounter ? <Counter /> : null}
      </div>
    );
  }
}

export default App;

import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    // Inicializando o estado do componente
    // this.contador = 0;
    this.state = {
      contador: 0,
      namer: "",
      password: "",
    };
  }
  render() {
    return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          fontSize: "24px",
          color: "#333",
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h1>{this.state.contador}</h1>

        <div>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px",
              gap: "10px",
              borderRadius: "5px",
              padding: "5px 10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              marginTop: "10px",
              width: "100px",
            }}
            onClick={() => {
              //!this.contador = this.contador + 1;
              this.setState({
                contador: this.state.contador + 1, // Atualiza o estado do contador
              });
            }}
          >
            Aumentar
          </button>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px",
              gap: "10px",
              borderRadius: "5px",
              padding: "5px 10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              marginTop: "10px",
              width: "100px",
            }}
            onClick={() => {
              this.setState({
                contador: this.state.contador - 1, // Atualiza o estado do contador
              });
              //!this.contador = this.contador - 1;
              // if (this.contador < 0) {
              //   this.contador = 0; // Impede que o contador fique negativo
              // }
            }}
          >
            Diminuir
          </button>
        </div>

        <form
          style={{
            marginTop: "20px",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={(event) => {
            event.preventDefault();
            console.log(this.state.namer, this.state.password);
          }}
        >
          <input
            type="text"
            placeholder="Nome"
            value={this.state.namer}
            onChange={(event) => {
              this.setState({ namer: event.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Senha"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
          <button
            type="submit"
            style={{
              padding: "5px 10px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

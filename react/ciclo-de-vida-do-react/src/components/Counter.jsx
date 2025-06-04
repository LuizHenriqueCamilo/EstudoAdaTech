import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    console.log("Counter: constructor");
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginTop: "20px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#e6e6e6",
          },
        }}
      >
        <h1>Contagem</h1>
        <h2>{this.state.count}</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Incrementar
          </button>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#f44336",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            Decrementar
          </button>
        </div>
      </div>
    );
  }
}

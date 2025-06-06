import React, { useState } from "react";
import "./Counter/styles.css";

export function Counter() {
  const [contador, setContador] = useState(0);
  return (
    <div className="counter">
      <h1>Contagem</h1>
      <h2>{contador}</h2>
      <div className="buttons">
        <button
          className="increment-button"
          onClick={() => {
            setContador(contador + 1);
          }}
        >
          Incrementar
        </button>
        <button
          className="decrement-button"
          onClick={() => {
            setContador(contador - 1);
          }}
        >
          Decrementar
        </button>
      </div>
    </div>
  );
}

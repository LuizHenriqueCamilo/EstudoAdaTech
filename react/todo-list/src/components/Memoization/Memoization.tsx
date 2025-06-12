import * as React from "react";
import { useState, useMemo } from "react"

interface MemoizationProps {
  financialData: {
    incomes: number[];
    outcomes: number[];
  };
}

export const Memoization: React.FC<MemoizationProps> = ({ financialData }) => {
  const [showValue, setShowValue] = useState(true);

  const totalIncomes = useMemo(() => {
    return financialData.incomes.reduce((total, income) => {
      return (total += income);
    }, 0);
  }, [financialData.incomes]);

  const totalOutcomes = useMemo(() => {
    return financialData.outcomes.reduce((total, outcome) => {
      return (total += outcome);
    }, 0);
  }, [financialData.outcomes]);

  // const aplicarDesconto = React.useCallback((desconto: number) => {
  //   return totalIncomes * (1 - desconto);
  // }, [totalIncomes])

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        margin: "20px 0",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        fontSize: "18px",
        color: "#333",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        lineHeight: "1.5",
      }}
    >
      <h1>Memoization</h1>
      <h2>UseMemo</h2>
      <p> {`Total de receitas: R$${showValue ? totalIncomes : "XXXX"}`} </p>
      <p> {`Total de despesas: R$${showValue ? totalOutcomes : "XXXX"}`} </p>
      <button onClick={() => setShowValue(!showValue)}>
        {showValue ? "Ocultar Valores" : "Mostrar Valores"}
      </button>
      {showValue && <span>Mostrar Valores</span>}
    </div>
  );
};

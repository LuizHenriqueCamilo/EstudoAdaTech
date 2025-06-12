import { useRef } from "react";
export const Refs: React.FC = () => {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form onSubmit={(e) => handleOnSubmit(e)} style={{ padding: "20px" }}>
      <h1>useRef</h1>
      <input ref={inputNameRef} type="text" placeholder="Nome Completo" />
      <input ref={inputEmailRef} type="email" placeholder="E-mail" />
      <input ref={inputPasswordRef} type="password" placeholder="Senha" />
      <br />
      <button type="submit">Submeter</button>
    </form>
  );
};

import { Header } from "./components/Header/Header";
import "./styles/global.css";
import { Tasks } from "./components/Tasks/Tasks";
import { TasksProvider } from "./context/TasksContext";
// import { Refs } from "./components/Concepts/Refs";
// import { Memoization } from "./components/Memoization/Memoization";

function App() {
  return (
    <TasksProvider>
      <Header />;
      <Tasks />
      {/* <Memoization
        financialData={{ incomes: [50, 30, 20], outcomes: [5, 8, 4] }}
      />
      <Refs /> */}
    </TasksProvider>
  );
}

export default App;

/* o useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais.
   Ele é chamado após a renderização do componente e pode ser usado para realizar operações como buscar dados, manipular o DOM ou configurar assinaturas. O useEffect aceita uma função de efeito e um array de dependências, que determina quando o efeito deve ser executado novamente. Se o array de dependências estiver vazio, o efeito será executado apenas uma vez, após a montagem do componente.
   O useEffect é uma alternativa ao ciclo de vida componentDidMount, componentDidUpdate e componentWillUnmount em componentes de classe.
   dispara sempre que uma variavel do array de dependence for alterado 
   Por padrão, sempre será disparadp após a montagem do componente (componentDidMount) */

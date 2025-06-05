import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  //variavel Header é uma constante que recebe uma função "component funcional" do React
  return (
    <header className={styles.header}>
      {/* header é uma tag HTML que recebe a classe de estilos do arquivo styles.module.css */}
      <div className={styles.container}>
        {/* container é uma div que recebe a classe de estilos do arquivo styles.module.css */}
        <div>
          <h1>MyTodo</h1>

          <span>Bem-Vindo</span>
        </div>
        <div>
          <StatsCard title="Tarefas Criadas" value={5} />
          <StatsCard title="Tarefas Em Andamento" value={4} />
          <StatsCard title="Tarefas Concluídas" value={2} />
          {/* StatsCard é um componente que exibe o total de tarefas */}
        </div>
      </div>
    </header>
  );
};

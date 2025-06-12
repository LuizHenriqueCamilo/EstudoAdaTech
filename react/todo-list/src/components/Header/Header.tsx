import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

export const Header: React.FC = () => {
  //variavel Header é uma constante que recebe uma função "component funcional" do React
  const { tasks } = useContext(TasksContext);

  const totalTasks = tasks.length;
  const pendingTasks = tasks.reduce((total: number, task: { done: boolean }) => {
    return !task.done ? total + 1 : total;
  }, 0);

  const completedTasks = totalTasks - pendingTasks;
  

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
          <StatsCard title="Tarefas Criadas" value={totalTasks} />
          <StatsCard title="Tarefas Em Andamento" value={pendingTasks} />
          <StatsCard title="Tarefas Concluídas" value={completedTasks} />
          {/* StatsCard é um componente que exibe o total de tarefas */}
        </div>
      </div>
    </header>
  );
};

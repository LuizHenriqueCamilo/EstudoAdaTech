import { FormEvent, useContext, useState } from "react";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const { tasks, setTasks, handleToggleTaskStatus } = useContext(TasksContext);
  // função para lidar com o envio do formulário
  // useState é um hook do React que permite adicionar o estado ao componente funcional
  function handleSubmitTask(e: FormEvent) {
    // Aqui você pode adicionar a lógica para lidar com a tarefa
    e.preventDefault();
    // preventDefault() é usado para evitar o comportamento padrão do formulário, que é recarregar a página
    if (taskTitle.length < 3) {
      alert("O título da tarefa deve ter pelo menos 3 caracteres.");
      return;
    }
    // logica para adicionar a tarefa
    const newTask = [
      ...tasks,
      { id: new Date().getTime().toString(), title: taskTitle, done: false },
    ];
    setTasks(newTask);
    // ...tasks é usado para manter as tarefas existentes e adicionar a nova tarefa
    localStorage.setItem("tasks", JSON.stringify(newTask));
    // localStorage.setItem é usado para armazenar as tarefas no armazenamento local do navegador
    // JSON.stringify(tasks) é usado para converter o array de tarefas em uma string JSON
    setTaskTitle("");
    // setTasksTitle("") é usado para limpar o campo de entrada após a tarefa ser adicionada
  }


  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitTask}>
        {/* onSubmit é um evento que ocorre quando o formulário é enviado */}

        <div>
          <label htmlFor="task-title">Adcionar Tarefa</label>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            // onCchange mudança de valor do input
            id="task-title"
            type="text"
            placeholder="Titulo da tarefa"
          />
        </div>
        <button type="submit">Adcionar Tarefa</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {/* key é uma propriedade especial do React usada para identificar elementos únicos em uma lista */}
              <input
                type="checkbox"
                id={`task-${task.id}`}
                onChange={() => handleToggleTaskStatus(task.id)}
                checked={task.done}
              />
              <label
                htmlFor={`task-${task.id}`}
                className={task.done ? styles.done : ""}
              >
                {task.title}
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

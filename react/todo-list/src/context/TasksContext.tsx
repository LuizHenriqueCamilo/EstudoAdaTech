import React, { createContext, ReactNode, useEffect, useState } from "react";

export interface Task {
  id: string;
  title: string;
  done: boolean;
}

interface TasksContextData {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  handleToggleTaskStatus: (taskId: string) => void;
}

export const TasksContext = createContext({} as TasksContextData);

interface TasksProviderProps {
  children: ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem("tasks");
    // localStorage.getItem é usado para obter as tarefas armazenadas no armazenamento local do navegador
    if (tasksOnLocalStorage) {
      setTasks(JSON.parse(tasksOnLocalStorage));
      // JSON.parse é usado para converter a string JSON de volta em um array de tarefas
    }
  }, []);
  function handleToggleTaskStatus(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        handleToggleTaskStatus,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

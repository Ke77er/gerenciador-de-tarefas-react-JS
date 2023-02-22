// Importação dos componentes Navbar e TaskList, e do arquivo de estilo CSS
import Navbar from "./components/navbar/Navbar";
import "./styles.css";
import TaskList from "./components/tasklist/TaskList";

// Importação do useState, um Hook do React para gerenciar o estado da aplicação
import { useState } from "react";

// Variável global para armazenar o próximo ID a ser atribuído a uma tarefa
let idAcc = 0;

// Função para gerar um novo ID a cada nova tarefa criada
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

// Definição do componente principal da aplicação, exportado como padrão
export default function App() {
  // Estado inicial da aplicação - uma lista vazia de tarefas
  const [tasks, setTasks] = useState([]);

  // Função para adicionar uma nova tarefa à lista de tarefas
  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  // Função para atualizar uma tarefa existente na lista de tarefas
  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  // Função para excluir uma tarefa da lista de tarefas
  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  // Renderização do componente principal da aplicação
  return (
    <div className="App">
      {/* Renderização do componente Navbar */}
      <Navbar />
      <div className="container">
        {/* Renderização do componente TaskList para as tarefas pendentes */}
        <TaskList
          title="Pendente"
          onAddTask={addTask}
          taskState="Pendente"
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        {/* Renderização do componente TaskList para as tarefas em progresso */}
        <TaskList
          title="Fazendo"
          onAddTask={addTask}
          taskState="Fazendo"
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        {/* Renderização do componente TaskList para as tarefas concluídas */}
        <TaskList
          title="Concluido"
          onAddTask={addTask}
          taskState="Concluido"
          tasks={tasks.filter((t) => t.state === "Concluido")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

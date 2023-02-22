import PropTypes from "prop-types";
import React, { useState } from "react";
import "./taskitem.css";

export default function TaskItem({
  id,
  onDeleteTask,
  title,
  taskState,
  onTaskUpdate
}) {
  // Define dois estados iniciais utilizando o hook useState()
  // 'isEditing' representa se o usuário está editando ou não o título da tarefa
  // 'editableTitle' representa o título da tarefa editável pelo usuário
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  // Função que é executada toda vez que o usuário altera o título da tarefa
  // Ela atualiza o estado 'editableTitle' com o novo valor digitado pelo usuário
  // E chama a função 'onTaskUpdate' passando o id da tarefa, o novo título e o estado atual da tarefa
  const ontitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  // Função que é executada toda vez que o usuário pressiona uma tecla enquanto estiver editando o título da tarefa
  // Se a tecla pressionada for 'Enter', significa que o usuário terminou de editar o título
  // Então a função atualiza o estado 'isEditing' para false e, caso o título editável esteja vazio, remove a tarefa
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (editableTitle.length === 0) {
        onDeleteTask(id);
      }
    }
  };

  // Função que é executada toda vez que o usuário altera o estado atual da tarefa (pendente, fazendo, concluído)
  // Ela chama a função 'onTaskUpdate' passando o id da tarefa, o título atual da tarefa e o novo estado selecionado pelo usuário
  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  // Caso o usuário esteja editando o título da tarefa, o componente retorna um input onde o usuário pode digitar o novo título
  // Se o usuário estiver editando, a função 'onKeyPress' é chamada toda vez que ele pressionar uma tecla
  if (isEditing) {
    return (
      <div className="task-item">
        <input
          type="text"
          value={editableTitle}
          onChange={ontitleChange}
          onKeyPress={onKeyPress}
        />
      </div>
    );
  }
  // Caso o usuário não esteja editando o título da tarefa, o componente retorna o título atual e o estado da tarefa
  // Ao clicar no título, a função setIsEditing é chamada, atualizando o estado para true e permitindo que o usuário edite o título
  // Ao selecionar um estado, a função 'onTaskStateChange' é chamada e atualiza o estado atual da tarefa
  else {
    // Renderiza o título e o estado da tarefa
    return (
      <div className="task-item">
        <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>
        <select onChange={onTaskStateChange} value={taskState}>
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Concluido">Concluido</option>
        </select>
      </div>
    );
  }
}

// Define os tipos esperados das props passadas para o componente
TaskItem.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired
};

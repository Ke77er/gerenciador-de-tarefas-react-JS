import React from "react";
import "./tasklist.css"; // importa o arquivo de estilos específicos desta componente
import PropTypes from "prop-types"; // importa a biblioteca PropTypes para realizar validação das props
import { useState } from "react"; // importa o hook useState do React
import TaskItem from "../taskitem/TaskItem"; // importa a componente TaskItem

export default function TaskList({
  title, // o título da lista (obrigatório)
  taskState, // o estado das tarefas da lista ("Pendente", "Fazendo" ou "Concluido")
  onAddTask, // função para adicionar uma nova tarefa à lista
  tasks, // um array de objetos contendo as tarefas da lista
  onTaskUpdate, // função para atualizar uma tarefa na lista
  onDeleteTask // função para deletar uma tarefa da lista
}) {
  const addTask = () => {
    onAddTask("Nova tarefa", taskState); // adiciona uma nova tarefa à lista utilizando a função onAddTask passada por props
  };
  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id} // chave única para cada tarefa
              id={task.id} // id da tarefa
              title={task.title} // título da tarefa
              taskState={task.state} // estado atual da tarefa
              onTaskUpdate={onTaskUpdate} // função para atualizar a tarefa
              onDeleteTask={onDeleteTask} // função para deletar a tarefa
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista vazia</div>}{" "}
        {
          // exibe uma mensagem caso a lista esteja vazia
        }{" "}
        <button onClick={addTask}>Adicionar tarefa</button>{" "}
        {
          // botão para adicionar uma nova tarefa à lista
        }{" "}
      </div>
    </div>
  );
}
TaskList.PropTypes = {
  title: PropTypes.string.isRequired, // define que a prop title é uma string obrigatória
  onAddTask: PropTypes.func.isRequired, // define que a prop onAddTask é uma função obrigatória
  tasks: PropTypes.array.isRequired // define que a prop tasks é um array obrigatório
};

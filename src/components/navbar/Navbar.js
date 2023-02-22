import React from "react"; // importa a biblioteca React
import "./navbar.css"; // importa o arquivo CSS que contém a estilização da barra de navegação

export default function Navbar() {
  // define o componente Navbar como padrão para ser utilizado em outros módulos
  return (
    <nav className="navbar">
      {" "}
      {
        // retorna o elemento HTML de navegação com a classe CSS navbar
      }{" "}
      <span>React Projeto</span>{" "}
      {
        // exibe o texto "React Projeto" na barra de navegação
      }{" "}
    </nav>
  );
}

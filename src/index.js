import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// Obtem o elemento root do HTML onde o aplicativo React será montado
const rootElement = document.getElementById("root");

// Cria a raiz para renderizar o aplicativo React
const root = createRoot(rootElement);

// Renderiza o aplicativo React dentro da raiz criada, envolvendo-o em <StrictMode>
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

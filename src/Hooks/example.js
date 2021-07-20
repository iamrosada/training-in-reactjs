import React, { useState } from "react";

export default function Hookd() {
  const [tarefas, setTarefas] = useState([
    "Arumar a casa",
    "Ir ao duch ",
    "Comer Pão"
  ]);
  const [input, setInput] = useState("");

  //adiciona tarefas
  function handleTarefas() {
    setTarefas([...tarefas, input]);
    setInput("");
  }
  return (
    <div>
      <h2>Minhas Tarefas</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <button type="button" onClick={handleTarefas}>
        Adicionar Tarefas
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

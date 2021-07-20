import React, { useState, useEffect } from "react";

/* a api do useEffect ela vem para substituir 
tal como o componentDidMount
*/
export default function Hookd() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  /*como  o componentDidMount */

  useEffect(() => {
    const storageTarefas = localStorage.getItem("tarefas");

    if (storageTarefas) {
      setTarefas(JSON.parse(storageTarefas));
    }
  }, []);

  /*como  o componentDidUpdated */
  useEffect(
    () => {
      localStorage.setItem("tarefas", JSON.stringify(tarefas));
    },

    /*dentro desse array 
  vai estar a funtion que vai ser monitorada
  sempre que ela sofrer uma alteração a funtion above vai ser chamada
   */ [
      tarefas
    ]
  );

  //adiciona tarefas
  function handleTarefas() {
    input.trim ? alert("input is empty") : setTarefas([...tarefas, input]);

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

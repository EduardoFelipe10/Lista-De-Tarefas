import '../styles/ListaDeTarefas.css';
import React from 'react';
import Tarefa from './Tarefa';
import '../styles/ListaDeTarefas.css';

const ListaDeTarefas = ({ tarefas, excluirTarefa, marcarComoConcluida }) => {
  return (
    <div className="lista-de-tarefas">
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          excluirTarefa={excluirTarefa}
          marcarComoConcluida={marcarComoConcluida}
        />
      ))}
    </div>
  );
};

export default ListaDeTarefas;

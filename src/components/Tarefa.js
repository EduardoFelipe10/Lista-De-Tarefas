import React from 'react';
import '../styles/Tarefa.css';


function Tarefa({ tarefa, excluirTarefa, marcarComoConcluida }) {
  return (
    <div className={`tarefa ${tarefa.concluida ? 'concluida' : ''}`}>
      <div className="conteudo">
        <h3>{tarefa.titulo}</h3>
        <p>{tarefa.descricao}</p>
        <p className="data-criacao">Criada em: {tarefa.criadaEm}</p>
        {tarefa.concluidaEm && <p className="data-conclusao">Concluída em: {tarefa.concluidaEm}</p>}
      </div>
      <div className="botoes">
        <button onClick={() => marcarComoConcluida(tarefa.id)}>
          {tarefa.concluida ? 'Reabrir' : 'Concluir'}
        </button>
        <button onClick={() => excluirTarefa(tarefa.id)} className="excluir">Excluir</button>
      </div>
    </div>
  );
}

export default Tarefa;

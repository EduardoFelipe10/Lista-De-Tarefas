import '../styles/FormTarefa.css';
import React, { useState } from 'react';
import '../styles/FormTarefa.css';

const FormTarefa = ({ adicionarTarefa }) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo && descricao) {
      const novaTarefa = {
        id: Date.now(),
        titulo,
        descricao,
        concluida: false
      };
      adicionarTarefa(novaTarefa);
      setTitulo('');
      setDescricao('');
    }
  };

  return (
    <form className="form-tarefa" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default FormTarefa;

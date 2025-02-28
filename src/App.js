import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Filtro from './components/Filtro';
import FormTarefa from './components/FormTarefa';
import ListaDeTarefas from './components/ListaDeTarefas';


function App() {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState('todas'); // "todas", "concluidas", "pendentes"
  const [dataHora, setDataHora] = useState(new Date());

  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    setTarefas(tarefasSalvas);
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataHora(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const adicionarTarefa = (tarefa) => {
    const novaTarefa = {
      ...tarefa,
      id: Date.now(),
      criadaEm: new Date().toLocaleString(),
      concluidaEm: null,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const excluirTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  const marcarComoConcluida = (id) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id
        ? { ...tarefa, concluida: !tarefa.concluida, concluidaEm: tarefa.concluida ? null : new Date().toLocaleString() }
        : tarefa
    ));
  };

  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === 'concluidas') return tarefa.concluida;
    if (filtro === 'pendentes') return !tarefa.concluida;
    return true;
  });

  return (
    <div className="app">
      <img src="/logo.png" alt="Logo" className="logo" />
      <h1>Lista de Tarefas</h1>
      <p className="data-hora">
        {dataHora.toLocaleDateString()} - {dataHora.toLocaleTimeString()}
      </p>
      <FormTarefa adicionarTarefa={adicionarTarefa} />
      <Filtro filtro={filtro} setFiltro={setFiltro} />
      <ListaDeTarefas
        tarefas={tarefasFiltradas}
        excluirTarefa={excluirTarefa}
        marcarComoConcluida={marcarComoConcluida}
      />
    </div>
  );
}

export default App;

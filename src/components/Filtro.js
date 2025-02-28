import React from 'react';
import '../styles/Filtro.css';

const Filtro = ({ filtro, setFiltro }) => {
  return (
    <div className="filtro">
      <button
        className={filtro === 'todas' ? 'active' : ''}
        onClick={() => setFiltro('todas')}
      >
        Todas
      </button>
      <button
        className={filtro === 'concluidas' ? 'active' : ''}
        onClick={() => setFiltro('concluidas')}
      >
        Concluídas
      </button>
      <button
        className={filtro === 'pendentes' ? 'active' : ''}
        onClick={() => setFiltro('pendentes')}
      >
        Pendentes
      </button>
    </div>
  );
};

export default Filtro;

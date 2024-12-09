import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="navigation-buttons">
      <button
        onClick={() => navigate(-1)} // Botón para ir a la página anterior
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#0066c0',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '1rem',
        }}
      >
        Retroceder
      </button>
      <button
        onClick={() => navigate('/')} // Botón para ir a la página principal
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Ir al Inicio
      </button>
    </div>
  );
};

export default NavigationButtons;

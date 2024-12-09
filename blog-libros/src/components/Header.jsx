import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', backgroundColor: '#333', color: 'white' }}>
      <h1 style={{ color: '#00d4ff' }}>Blog de Libros</h1>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/favs" style={{ color: 'white', textDecoration: 'none' }}>Favoritos</Link>
        <Link to="/contacto" style={{ color: 'white', textDecoration: 'none' }}>Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favs">Favs</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
};

export default Navbar;

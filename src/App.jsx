import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails'; // Importa el componente de detalles del libro
import Contact from './pages/Contact';
import Favs from './pages/Favs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} /> {/* Ruta dinámica */}
        <Route path="/contacto" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
    </Router>
  );
};

export default App;

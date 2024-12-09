import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavsProvider } from './context/FavsContext'; // Importar el proveedor
import Header from './components/Header';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Contact from './pages/Contact';
import Favs from './pages/Favs';

const App = () => {
  return (
    <FavsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
      </Router>
    </FavsProvider>
  );
};

export default App;

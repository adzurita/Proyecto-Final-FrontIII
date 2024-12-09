import React, { useState, useEffect } from 'react';

const Home = () => {
  const [books, setBooks] = useState([]); // Almacena los libros
  const [error, setError] = useState(null); // Maneja errores

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://openlibrary.org/subjects/science_fiction.json?limit=10');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setBooks(data.works); // Actualiza los libros en el estado
      } catch (err) {
        setError(err.message); // Actualiza el error si ocurre
      }
    };

    fetchBooks();
  }, []); // Ejecuta solo una vez al cargar el componente

  if (error) {
    return <p>Error: {error}</p>; // Muestra el error si ocurre
  }

  return (
    <div>
      <h1>Libros de Ciencia Ficción</h1>
      <div className="card-container">
        {books.map((book) => (
          <div key={book.key} className="card">
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
              alt={book.title}
            />
            <h3>{book.title}</h3>
            <p>Autor: {book.authors?.[0]?.name || 'Desconocido'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

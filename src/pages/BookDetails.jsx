import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams(); // Obtiene el ID del libro desde la URL
  const [book, setBook] = useState(null); // Almacena los detalles del libro
  const [error, setError] = useState(null); // Maneja errores

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org${id}.json`);
        if (!response.ok) {
          throw new Error('Error al obtener los detalles del libro');
        }
        const data = await response.json();
        setBook(data); // Actualiza el estado con los datos del libro
      } catch (err) {
        setError(err.message); // Actualiza el estado con el error si ocurre
      }
    };

    fetchBookDetails();
  }, [id]); // Vuelve a ejecutar si cambia el ID del libro

  if (error) {
    return <p>Error: {error}</p>; // Muestra el error si ocurre
  }

  if (!book) {
    return <p>Cargando detalles del libro...</p>; // Muestra mientras se cargan los datos
  }

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <p>Autor: {book.authors?.[0]?.name || 'Desconocido'}</p>
      <p>ISBN: {book.isbn?.join(', ') || 'No disponible'}</p>
      {book.covers?.[0] && (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
          alt={book.title}
        />
      )}
      <p>{book.description?.value || 'No hay descripción disponible'}</p>
    </div>
  );
};

export default BookDetails;

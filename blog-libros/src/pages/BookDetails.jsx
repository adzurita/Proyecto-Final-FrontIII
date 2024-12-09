import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationButtons from '../components/NavigationButtons';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://openlibrary.org${id}.json`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [id]);

  return (
    <div className="page-content">
      <NavigationButtons /> {/* Botones de navegación */}
      {book ? (
        <div className="book-details">
          <h1>{book.title}</h1>
          <p>Autor: {book.authors?.[0]?.name}</p>
          <img
            src={`https://covers.openlibrary.org/b/id/${book.covers?.[0]}-L.jpg`}
            alt={book.title}
          />
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default BookDetails;

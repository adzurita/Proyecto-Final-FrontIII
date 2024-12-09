import React, { useEffect, useState, useContext } from 'react';
import { FavsContext } from '../context/FavsContext';
import BookCard from '../components/BookCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje
  const { dispatch } = useContext(FavsContext); // Acceso al estado global

  useEffect(() => {
    fetch('https://openlibrary.org/subjects/science_fiction.json?limit=10')
      .then((response) => response.json())
      .then((data) => setBooks(data.works));
  }, []);

  const addToFavorites = (book) => {
    dispatch({ type: 'ADD_FAV', payload: book });
    setSuccessMessage(`¡${book.title} se agregó a favoritos!`); // Establece el mensaje
    setTimeout(() => setSuccessMessage(''), 3000); // Limpia el mensaje después de 3 segundos
  };

  return (
    <div className="page-content">
      <h1>Libros Disponibles</h1>

      {/* Mensaje de éxito */}
      {successMessage && (
        <div
          style={{
            backgroundColor: '#d4edda',
            color: '#155724',
            padding: '1rem',
            margin: '1rem 0',
            borderRadius: '5px',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          {successMessage}
        </div>
      )}

      <div className="card-container">
        {books.map((book) => (
          <div key={book.key} className="card">
            <BookCard book={book} />
            <button
              onClick={() => addToFavorites(book)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '1rem',
              }}
            >
              Agregar a Favoritos
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

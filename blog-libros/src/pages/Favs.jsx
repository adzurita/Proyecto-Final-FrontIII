import React, { useContext } from 'react';
import { FavsContext } from '../context/FavsContext';
import NavigationButtons from '../components/NavigationButtons';

const Favs = () => {
  const { favs, dispatch } = useContext(FavsContext);

  const removeFromFavorites = (book) => {
    dispatch({ type: 'REMOVE_FAV', payload: book });
  };

  return (
    <div className="page-content">
      <h1>Libros Favoritos</h1>
      {favs.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No tienes libros favoritos aún.</p>
      ) : (
        <div className="card-container">
          {favs.map((book) => (
            <div key={book.key} className="card">
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                alt={book.title}
              />
              <h3>{book.title}</h3>
              <button
                onClick={() => removeFromFavorites(book)}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#ff4d4d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginTop: '1rem',
                }}
              >
                Eliminar de Favoritos
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favs;

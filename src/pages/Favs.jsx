import React, { useContext } from 'react';
import { FavsContext } from '../context/FavsContext';

const Favs = () => {
  const { favBooks } = useContext(FavsContext);

  return (
    <div>
      <h1>Favoritos</h1>
      <div className="card-container">
        {favBooks.map((book) => (
          <div key={book.key} className="card">
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
              alt={book.title}
            />
            <h3>{book.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favs;

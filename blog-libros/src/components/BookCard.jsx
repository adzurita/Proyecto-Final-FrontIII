import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const coverId = book.cover_id;

  return (
    <div className="card">
      <img
        src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`}
        alt={book.title}
      />
      <h3>{book.title}</h3>
      <Link to={`/book/${book.key}`}>Detalles</Link>
    </div>
  );
};

export default BookCard;

import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, linkTo }) => {
  return (
    <div className="card">
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
        alt={book.title}
      />
      <h3>{book.title}</h3>
      <Link to={linkTo}>View Details</Link>
    </div>
  );
};

export default BookCard;

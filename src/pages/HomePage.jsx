import React, { useState, useEffect } from "react";
import { searchBooks } from "../api/openLibrary";
import BookCard from "../components/BookCard"; // Supongamos que existe un componente para mostrar libros

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const results = await searchBooks("javascript"); // Puedes cambiar el término de búsqueda
      setBooks(results);
      setLoading(false);
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <p>Cargando libros...</p>;
  }

  return (
    <div>
      <h1>Lista de Libros</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

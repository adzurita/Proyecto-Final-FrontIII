const API_BASE = 'https://openlibrary.org';

export const fetchBooksBySubject = async (subject, limit = 10) => {
  const response = await fetch(`${API_BASE}/subjects/${subject}.json?limit=${limit}`);
  if (!response.ok) {
    throw new Error('Error al obtener libros');
  }
  return response.json();
};

export const fetchBookDetails = async (bookId) => {
  const response = await fetch(`${API_BASE}${bookId}.json`);
  if (!response.ok) {
    throw new Error('Error al obtener los detalles del libro');
  }
  return response.json();
};

const BASE_URL = "https://openlibrary.org";

/**
 * Obtiene una lista de libros por búsqueda.
 * @param {string} query - El término de búsqueda (por ejemplo, "javascript").
 * @returns {Promise<Object>} - Resultados de la búsqueda de libros.
 */
export const searchBooks = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search.json?q=${query}`);
    if (!response.ok) {
      throw new Error("Error al buscar libros");
    }
    const data = await response.json();
    return data.docs; // Devolvemos los libros encontrados
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * Obtiene los detalles de un libro por su ID.
 * @param {string} id - El ID del libro.
 * @returns {Promise<Object>} - Detalles del libro.
 */
export const getBookDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/works/${id}.json`);
    if (!response.ok) {
      throw new Error("Error al obtener detalles del libro");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

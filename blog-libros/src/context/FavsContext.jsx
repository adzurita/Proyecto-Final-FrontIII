import React, { createContext, useReducer } from 'react';

// Crear el contexto
export const FavsContext = createContext();

// Estado inicial
const initialState = {
  favs: [],
};

// Reducer para manejar acciones
const favsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAV':
      return { ...state, favs: [...state.favs, action.payload] };
    case 'REMOVE_FAV':
      return { ...state, favs: state.favs.filter((book) => book.key !== action.payload.key) };
    default:
      return state;
  }
};

// Proveedor del contexto
export const FavsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favsReducer, initialState);

  return (
    <FavsContext.Provider value={{ favs: state.favs, dispatch }}>
      {children}
    </FavsContext.Provider>
  );
};

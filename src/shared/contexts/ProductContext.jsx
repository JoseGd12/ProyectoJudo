import { createContext, useState, useEffect } from 'react';
import  judoProducts  from '../../features/landing/services/judoProducts'; // Importa los datos locales

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState('');

 

  return (
    <ProductContext.Provider value={{ productos, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};
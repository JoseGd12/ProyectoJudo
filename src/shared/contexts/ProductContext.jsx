import { createContext, useState, useEffect } from 'react';
import  judoProducts  from '../../features/landing/services/judoProducts'; // Importa los datos locales

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false); // No hay carga con datos locales
  const [error, setError] = useState('');

  useEffect(() => {
    // Simula una "carga" de API con datos locales
    setTimeout(() => {
      setProductos(judoProducts.slice(0, 6)); // Limita a 6 productos
    }, 500); // Pequeño delay para simular async
  }, []);

  return (
    <ProductContext.Provider value={{ productos, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};
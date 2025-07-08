import { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../../shared/contexts/ProductContext';
import Products from './Products';
import  fetchJudoProducts  from '../services/judoProducts';
import '../styles/judoProducts.css'; 

const InformacionProductos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchJudoProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="productos-container">
      {products.map((producto) => (
        <Products key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default InformacionProductos;
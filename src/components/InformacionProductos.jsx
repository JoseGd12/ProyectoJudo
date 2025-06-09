import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Products from './Products';
import '../styles/judoProducts.css'; 

const InformacionProductos = () => {
  const { productos, loading, error } = useContext(ProductContext);

  return (
    <section className="judo-products-section">
      <h2 className="judo-products-title">Productos Disponibles</h2>
      <div className="separationproducts"></div>
      <div className="productos-container">
        {loading ? (
          <p className="loading-message">Cargando productos...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          productos.map((producto) => (
            <Products key={producto.id} producto={producto} />
          ))
        )}
      </div>
    </section>
  );
};

export default InformacionProductos;
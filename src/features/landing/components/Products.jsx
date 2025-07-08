import { useState } from 'react';
import { useCart } from '../../../features/cart/hooks/CartContext';
import { useNotification } from '../../../features/cart/hooks/useNotification';
import Swal from 'sweetalert2';

const Products = ({ producto }) => {
  const { addItem } = useCart();
  const { showError, showSuccess } = useNotification();
  
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);

  };

  const [imgError, setImgError] = useState(false);

  const handleAddToCart = () => {
    if (count <= 0) {
      showError('Selecciona al menos 1 producto ❗');
      return;
    }

 
    addItem({
      ...producto,
      quantity: count 
    });

    showSuccess(`Agregaste ${count} ${producto.title} al carrito 🛒`);
    setCount(0); 
  };

  return (
    <div className="producto">
      <img 
        src={imgError ? '/placeholder-judogi.png' : producto.image} 
        alt={producto.title} 
        onError={() => setImgError(true)}
        className="product-image"
      />
      <h3>{producto.title}</h3>
      <p>Precio: ${producto.price}</p>
      <div className="contador">
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button 
        onClick={handleAddToCart}
        className="agregarbtn"
        disabled={count <= 0}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default Products;
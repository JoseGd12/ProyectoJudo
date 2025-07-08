import { useState } from 'react';
import { useCart } from '../../../features/cart/hooks/CartContext';
import { useNotification } from '../../../features/cart/hooks/useNotification';
import Skeleton from 'react-loading-skeleton';
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

  const handleAddToCart = () => {
    if (count <= 0) {
      showError('Selecciona al menos 1 producto ❗');
      return;
    }

    // Agregar el producto con la cantidad correcta
    addItem({
      ...producto,
      quantity: count // Aquí está el cambio clave
    });

    showSuccess(`Agregaste ${count} ${producto.title} al carrito 🛒`);
    setCount(0); // Resetear el contador después de agregar
  };

  return (
    <div className="producto">
      {producto.image ? (
        <img  src={producto.image} alt={producto.title} width="100" />

      ) : (
        <Skeleton height={100} width={100} />
      )
      }
      
      <h3>{producto.title || <Skeleton />}</h3>
      <h3>{producto.title || <Skeleton />}</h3>
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
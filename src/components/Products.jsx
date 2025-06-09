import { useState } from 'react';

const Products = ({ producto }) => {
  const [count, setCount] = useState(0);
  const [statusBtn, setStatusBtn] = useState(false);

  const handleIncrement = () => {
    if (count < 10) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleAddToCart = () => {
    if (count > 0) {
      alert(`Agregaste ${count} ${producto.title} al carrito 🛒`);
      setStatusBtn(true);
    } else {
      alert('Selecciona al menos 1 producto ❗');
    }
  };

  return (
    <div className="producto">
      <img src={producto.image} alt={producto.title} width="100" />
      <h3>{producto.title}</h3>
      <p>Precio: ${producto.price}</p>
      <div className="contador">
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button 
        onClick={handleAddToCart} 
        disabled={statusBtn}
        className="agregarbtn"
      >
        {statusBtn ? 'Agregado ✔️' : 'Agregar al carrito'}
      </button>
    </div>
  );
};

export default Products;
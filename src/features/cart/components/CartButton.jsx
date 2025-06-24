import { useCart } from '../hooks/CartContext';

export const CartButton = () => {
  const { toggleCart, totalItems } = useCart();

  return (
    <button 
      onClick={toggleCart}
      className="btn  position-fixed" 
      style={{
        left: '20px',
        bottom: '20px',
        zIndex: 999,
        borderRadius: '50%',
        background:'#59599b',
        width: '60px',
        height: '60px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
      }}
    >
      🛒
      {totalItems > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalItems}
        </span>
      )}
    </button>
  );
};
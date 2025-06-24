import React from 'react';
import { useCart } from '../hooks/CartContext';
import Swal from 'sweetalert2';
import { CartItem } from './CartItem';

export const Cart = () => {
  const { 
    isOpen, 
    items, 
    totalPrice, 
    toggleCart, 
    removeItem, 
    updateQuantity,
    clearCart 
  } = useCart();

  const handleCheckout = () => {
    Swal.fire({
      title: '¿Finalizar compra?',
      text: `Total: $${totalPrice.toFixed(2)}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Pagar',
      cancelButtonText: 'Seguir comprando'
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire('¡Compra exitosa!', 'Gracias por tu compra', 'success');
      }
    });
  };
  

  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-slider">
        <div className="cart-header">
          <h3>Tu Carrito ({items.length})</h3>
          <button onClick={toggleCart} className="close-btn">×</button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-cart">
              <p>🛒 Tu carrito está vacío</p>
            </div>
          ) : (
            items.map(item => (
            <CartItem 
              key={`${item.id}-${item.quantity}`} 
              item={item}
              onRemove={removeItem}
              onUpdateQuantity={updateQuantity}
            />
          ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="cart-actions">
            <button 
              onClick={clearCart}
              className="btn-clear btn-outline-danger me-2"
              disabled={items.length === 0}
            >
              Vaciar Carrito
            </button>
            <button 
              onClick={handleCheckout}
              className="btn-checkout"
              disabled={items.length === 0}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
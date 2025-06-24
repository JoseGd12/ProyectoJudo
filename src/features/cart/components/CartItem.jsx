import React from 'react';

export const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img 
          src={item.image} 
          alt={item.name} 
          style={{
            width: '80px',
            height: '80px',
            objectFit: 'cover',
            borderRadius: '4px',
            border: '2px solid var(--judo-gold)'
          }}
        />
      </div>
      <div className="cart-item-details" style={{ flexGrow: 1 }}>
        <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--white)' }}>{item.name}</h4>
        <p style={{ margin: '0 0 0.5rem 0', color: 'var(--light-blue)' }}>${item.price.toFixed(2)}</p>
        <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center' }}>
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            style={{
              background: 'var(--judo-gold)',
              border: 'none',
              width: '25px',
              height: '25px',
              borderRadius: '4px 0 0 4px',
              cursor: 'pointer'
            }}
          >
            -
          </button>
          <span style={{ 
            padding: '0 0.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            height: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '30px'
          }}>
            {item.quantity}
          </span>
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            style={{
              background: 'var(--judo-gold)',
              border: 'none',
              width: '25px',
              height: '25px',
              borderRadius: '0 4px 4px 0',
              cursor: 'pointer'
            }}
          >
            +
          </button>
        </div>
      </div>
      <button 
        onClick={() => onRemove(item.id)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--judo-red)',
          cursor: 'pointer',
          fontSize: '1.2rem',
          alignSelf: 'flex-start'
        }}
      >
        ×
      </button>
    </div>
  );
};
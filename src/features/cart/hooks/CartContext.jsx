import React, { createContext, useReducer, useEffect } from 'react';
import { saveToStorage, getFromStorage } from '../../../shared/utils/storage';

const CartContext = createContext();

const initialState = {
  items: getFromStorage('cartItems') || [],
  isOpen: false
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const { id, quantity = 1 } = action.payload; // Asegura que quantity tenga valor
      
      // Validación adicional por si acaso
      if (quantity <= 0) return state;
      
      const existingItem = state.items.find(item => item.id === action.payload.id);
      const items = existingItem
        ? state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          )
        : [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }];
      
      saveToStorage('cartItems', items);
      return { ...state, items };

    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      saveToStorage('cartItems', filteredItems);
      return { ...state, items: filteredItems };

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    
    case 'UPDATE_QUANTITY':
    const updatedItems = state.items.map(item => 
      item.id === action.payload.id 
        ? { ...item, quantity: action.payload.quantity }
        : item
    ).filter(item => item.quantity > 0);
    
    saveToStorage('cartItems', updatedItems);
    return { ...state, items: updatedItems };

    case 'REMOVE_ALL':
    saveToStorage('cartItems', []);
    return { ...state, items: [] };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = {
    ...state,
    addItem: (product) => dispatch({ type: 'ADD_ITEM', payload: product }),
    removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
    toggleCart: () => dispatch({ type: 'TOGGLE_CART' }),
    totalItems: state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    updateQuantity: (id, quantity) => dispatch({ 
    type: 'UPDATE_QUANTITY', 
    payload: { id, quantity } 
    }),
    clearCart: () => dispatch({ type: 'REMOVE_ALL' })
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => React.useContext(CartContext);
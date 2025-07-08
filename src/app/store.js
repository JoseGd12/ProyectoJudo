import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../features/auth/slices/authSlice';
import productsReducer from '../features/auth/slices/productsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer
  }
});

export default store;
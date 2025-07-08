import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  adminFetchProducts, 
  adminCreateProduct, 
  adminUpdateProduct, 
  adminDeleteProduct 
} from '../services/adminProductsService';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async () => {
    const response = await adminFetchProducts();
    return response;
  }
);

export const createProduct = createAsyncThunk(
  'products/create',
  async (productData) => {
    const response = await adminCreateProduct(productData);
    return response;
  }
);

export const updateProduct = createAsyncThunk(
  'products/update',
  async ({id, productData}) => {
    const response = await adminUpdateProduct(id, productData);
    return response;
  }
);

export const deleteProduct = createAsyncThunk(
  'products/delete',
  async (id) => {
    await adminDeleteProduct(id);
    return id;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    currentProduct: null
  },
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(p => p.id !== action.payload);
      });
  }
});

export const { setCurrentProduct } = productsSlice.actions;
export default productsSlice.reducer;
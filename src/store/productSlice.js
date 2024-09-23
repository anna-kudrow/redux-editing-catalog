import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
  editMode: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push({...action.payload, id: crypto.randomUUID()});
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        product => product.id !== action.payload,
      );
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        product => product.id === action.payload.id,
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    toggleAvailability: (state, action) => {
      const product = state.products.find(
        product => product.id === action.payload,
      );
      if (product) {
        product.available = !product.available;
      }
    },
    editProduct: (state, action) => {
      state.products.map(product => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            name: action.payload.name,
            description: action.payload.description,
            price: action.payload.price,
          };
        }
        return product;
      });
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  updateProduct,
  toggleAvailability,
  editProduct,
} = productSlice.actions;
export default productSlice.reducer;

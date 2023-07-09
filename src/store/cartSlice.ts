import { createSlice } from '@reduxjs/toolkit';
import { SneakersType } from '../const/interfaces.ts';

const initialState: SneakersType = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.push(action.payload);
    },
    deleteCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;

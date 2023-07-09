import { createSlice } from '@reduxjs/toolkit';
import { SneakersType } from '../const/interfaces.ts';

const initialState: SneakersType = [];

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;

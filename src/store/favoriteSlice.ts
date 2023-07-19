import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ISneaker, SneakersType } from '../const/interfaces.ts';
import { sneakersService } from '../services/sneakersService.ts';

interface InitialState {
  favorite: SneakersType;
  status: 'loading' | 'resolved' | 'rejected';
  error: boolean;
}

const initialState: InitialState = {
  favorite: [],
  status: 'loading',
  error: false,
};

const { getFavorite, addFavorite, deleteFavorite } = sneakersService();
export const fetchFavorite = createAsyncThunk('favorite/get', getFavorite);
export const POSTFavorite = createAsyncThunk(
  'favorite/add',
  async (sneaker: ISneaker, { dispatch }) => {
    await addFavorite(sneaker);
    dispatch(fetchFavorite());
  }
);

export const DELETEFavorite = createAsyncThunk(
  'favorite/delete',
  async (id: string, { dispatch }) => {
    await deleteFavorite(id);
    dispatch(fetchFavorite());
  }
);

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteStore: (state, action) => {
      state.favorite.push(action.payload);
    },
    deleteFavoriteStore: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorite.pending, (state) => {
        state.status = 'loading';
        state.error = false;
      })
      .addCase(fetchFavorite.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.favorite = action.payload;
      })
      .addCase(fetchFavorite.rejected, (state) => {
        state.status = 'rejected';
        state.error = true;
      })
      .addCase(POSTFavorite.rejected, (state) => {
        state.status = 'rejected';
        state.error = true;
      })
      .addCase(DELETEFavorite.rejected, (state) => {
        state.status = 'rejected';
        state.error = true;
      });
  },
});

export const { addFavoriteStore, deleteFavoriteStore } = favoriteSlice.actions;

export default favoriteSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SneakersType } from '../const/interfaces.ts';
import { sneakersService } from '../services/sneakersService.ts';

interface IinitialState {
  sneakers: SneakersType;
  status: 'loading' | 'resolved' | 'rejected';
  error: boolean;
}

const initialState: IinitialState = {
  sneakers: [],
  status: 'loading',
  error: false,
};

const { getSneakers } = sneakersService();
export const fetchSneakers = createAsyncThunk('sneakers/fetch', getSneakers);

const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSneakers.pending, (state) => {
        state.status = 'loading';
        state.error = false;
      })
      .addCase(fetchSneakers.fulfilled, (state, action) => {
        state.status = 'rejected';
        state.sneakers = action.payload;
      })
      .addCase(fetchSneakers.rejected, (state) => {
        state.status = 'rejected';
        state.error = true;
      });
  },
});

export default sneakersSlice.reducer;

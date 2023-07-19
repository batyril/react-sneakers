import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ISneaker, SneakersType } from '../const/interfaces.ts';
import { sneakersService } from '../services/sneakersService.ts';

interface InitialState {
  cart: SneakersType;
  status: 'loading' | 'resolved' | 'rejected';
  error: boolean;
}

const initialState: InitialState = {
  cart: [],
  status: 'loading',
  error: false,
};

const { getCart, addCart, deleteCart } = sneakersService();
export const fetchCart = createAsyncThunk('cart/get', getCart);
export const POSTCart = createAsyncThunk(
  'cart/add',
  async (sneaker: ISneaker, { dispatch }) => {
    await addCart(sneaker);
    dispatch(addCartStore(sneaker));
    dispatch(fetchCart());
  }
);

export const DELETECart = createAsyncThunk(
  'cart/delete',
  async (id: number, { dispatch }) => {
    await deleteCart(id);
    dispatch(fetchCart());
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartStore: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteCartStore: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCartStore: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
        state.error = false;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.status = 'rejected';
        state.error = true;
      })
      .addCase(POSTCart.rejected, (state) => {
        state.status = 'rejected';
        state.error = true;
      })
      .addCase(DELETECart.rejected, (state) => {
        state.status = 'rejected';
        state.error = true;
      });
  },
});

export const { addCartStore, deleteCartStore, clearCartStore } =
  cartSlice.actions;

export default cartSlice.reducer;

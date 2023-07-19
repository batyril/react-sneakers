import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IOrders, ISneaker } from '../const/interfaces.ts';
import { sneakersService } from '../services/sneakersService.ts';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890abcdef', 4);

interface InitialState {
  orders: IOrders[];
  status: 'loading' | 'resolved' | 'rejected';
  error: boolean;
}

const initialState: InitialState = {
  orders: [],
  status: 'loading',
  error: false,
};

const { getOrders, createOrder } = sneakersService();
export const fetchOrders = createAsyncThunk('orders/get', getOrders);
export const POSTOrder = createAsyncThunk(
  'order/add',
  async (cart: ISneaker[]) => {
    const order = { id: nanoid(), date: new Date(), item: cart };
    const response = await createOrder(order);
    addOrderStore(order);
    return response.data.id;
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrderStore: (state, action) => {
      state.orders.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
        state.error = false;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.status = 'rejected';
        state.error = true;
      })
      .addCase(POSTOrder.rejected, (state) => {
        state.status = 'rejected';
        state.error = true;
      });
  },
});

export const { addOrderStore } = orderSlice.actions;

export default orderSlice.reducer;

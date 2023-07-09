import { configureStore } from '@reduxjs/toolkit';
import favoriteSlice from './favoriteSlice.ts';
import cartSlice from './cartSlice.ts';
import sneakersSlice from './sneakersSlice.ts';

export const store = configureStore({
  reducer: {
    favorite: favoriteSlice,
    cart: cartSlice,
    sneakers: sneakersSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { ISneaker, SneakersType } from '../const/interfaces.ts';
import { DELETECart, POSTCart } from '../store/cartSlice.ts';
import { handleFavoriteError } from './handleFavoriteError.ts';
import { AppDispatch } from '../store';

export const updateCart = async (
  sneaker: ISneaker,
  dispatch: AppDispatch,
  cartSneakers: SneakersType
) => {
  const isInCart = cartSneakers.find((item) => item.id === sneaker.id);
  try {
    if (isInCart) {
      dispatch(DELETECart(isInCart.id));
    } else {
      dispatch(POSTCart(sneaker));
    }
  } catch (error) {
    handleFavoriteError(error);
  }
};

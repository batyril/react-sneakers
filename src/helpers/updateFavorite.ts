import { ISneaker, SneakersType } from '../const/interfaces.ts';
import { DELETEFavorite, POSTFavorite } from '../store/favoriteSlice.ts';
import { handleFavoriteError } from './handleFavoriteError.ts';
import { AppDispatch } from '../store';

export const updateFavorite = async (
  sneaker: ISneaker,
  dispatch: AppDispatch,
  favoriteSneakers: SneakersType
) => {
  const isInFavorites = favoriteSneakers.find((item) => item.id === sneaker.id);
  try {
    if (isInFavorites) {
      dispatch(DELETEFavorite(isInFavorites.id));
    } else {
      dispatch(POSTFavorite(sneaker));
    }
  } catch (error) {
    handleFavoriteError(error);
  }
};

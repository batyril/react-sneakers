import React, { createContext } from 'react';
import { ISneaker, SneakersType } from '../const/interfaces.ts';

interface IAppContext {
  searchName: string;
  setSearchName?: React.Dispatch<React.SetStateAction<string>>;
  cartSneakers: SneakersType | [];
  favoriteSneakers: SneakersType | [];
  allSneakers: SneakersType | [];
  isLoading: boolean;
  updateFavorite: (sneaker: ISneaker) => void;
  updateCart: (sneaker: ISneaker) => void;
  sideMenuOpened: boolean;
  setSideMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setCartSneakers: React.Dispatch<React.SetStateAction<SneakersType | []>>;
  finalPrice: number;
}

const defaultContext: IAppContext = {
  searchName: '',
  cartSneakers: [],
  favoriteSneakers: [],
  allSneakers: [],
  isLoading: false,
};

export const AppContext = createContext(defaultContext);

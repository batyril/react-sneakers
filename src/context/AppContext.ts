import React, { createContext } from 'react';
import { ISneaker, SneakersType } from '../const/interfaces.ts';

interface IAppContext {
  searchName: string;
  setSearchName?: React.Dispatch<React.SetStateAction<string>>;
  cartSneakers: SneakersType | [];
  favorites: SneakersType | [];
  onDeleteCart: (id: string) => void;
  allSneakers: SneakersType | [];
  isLoading: boolean;
  onAddFavorite: (sneaker: ISneaker) => void;
  onAddCart: (sneaker: ISneaker) => void;
  sideMenuOpened: boolean;
  setSideMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setCartSneakers: React.Dispatch<React.SetStateAction<SneakersType | []>>;
  finalPrice: number;
}

const defaultContext: IAppContext = {
  searchName: '',
  cartSneakers: [],
  favorites: [],
  allSneakers: [],
  isLoading: false,
};

export const AppContext = createContext(defaultContext);

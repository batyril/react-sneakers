import React, { createContext } from 'react';
import { ISneaker, sneakersType } from '../../interfaces.ts';

interface IAppContext {
  searchName: string;
  setSearchName?: React.Dispatch<React.SetStateAction<string>>;
  cartSneakers: sneakersType | [];
  favorites: sneakersType | [];
  onDeleteCart: (id: string) => void;
  allSneakers: sneakersType | [];
  isLoading: boolean;
  onAddFavorite: (sneaker: ISneaker) => void;
  onAddCart: (sneaker: ISneaker) => void;
  sideMenuOpened: boolean;
  setSideMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setCartSneakers: React.Dispatch<React.SetStateAction<sneakersType | []>>;
}

const defaultContext: IAppContext = {
  searchName: '',
  cartSneakers: [],
  favorites: [],
  allSneakers: [],
  isLoading: false,
};

export const AppContext = createContext(defaultContext);

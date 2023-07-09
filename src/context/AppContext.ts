import React, { createContext } from 'react';
import { ISneaker, SneakersType } from '../const/interfaces.ts';

interface IAppContext {
  searchName: string;
  setSearchName?: React.Dispatch<React.SetStateAction<string>>;
  updateFavorite?: (sneaker: ISneaker) => void;
  updateCart?: (sneaker: ISneaker) => void;
  sideMenuOpened: boolean;
  setSideMenuOpened?: React.Dispatch<React.SetStateAction<boolean>>;
  setCartSneakers?: React.Dispatch<React.SetStateAction<SneakersType | []>>;
  finalPrice: number;
}

const defaultContext: IAppContext = {
  searchName: '',
  finalPrice: 0,
  sideMenuOpened: false,
};

export const AppContext = createContext(defaultContext);

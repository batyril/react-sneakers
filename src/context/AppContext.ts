import React, { createContext } from 'react';
import { SneakersType } from '../const/interfaces.ts';

interface IAppContext {
  searchName: string;
  setSearchName?: React.Dispatch<React.SetStateAction<string>>;
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

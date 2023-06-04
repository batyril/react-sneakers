import React, { createContext } from 'react';
import { sneakersType } from '../../interfaces.ts';

interface IFormContext {
  searchName: string;
  setSearchName?: React.Dispatch<React.SetStateAction<string>>;
  cartSneakers: sneakersType | [];
  favorites: sneakersType | [];
}

const defaultContext: IFormContext = {
  searchName: '',
  cartSneakers: [],
  favorites: [],
};

export const FormContext = createContext(defaultContext);

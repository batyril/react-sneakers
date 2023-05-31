import React, { createContext } from 'react';

interface IFormContext {
  searchName: string;
  setSearchName?: React.Dispatch<React.SetStateAction<string>>;
}

const defaultContext: IFormContext = {
  searchName: '',
};

export const FormContext = createContext(defaultContext);

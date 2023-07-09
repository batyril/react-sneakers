import { createSlice } from '@reduxjs/toolkit';
import { SneakersType } from '../const/interfaces.ts';

const initialState: SneakersType = [
  {
    price: 12999,
    name: "Nike Blazer Low '77 Vintage",
    avatar: "./src/img/sneakers/Nike Blazer Low '77 Vintage.webp",
    id: '1',
  },
  {
    price: 13299,
    name: 'Nike Dunk Low',
    avatar: './src/img/sneakers/Nike Dunk Low.webp',
    id: '2',
  },
  {
    price: 8499,
    name: 'Nike Killshot 2 Leather',
    avatar: './src/img/sneakers/Nike Killshot 2 Leather.webp',
    id: '3',
  },
  {
    price: 9699,
    name: 'Air Jordan 1 Low G',
    avatar: './src/img/sneakers/Air Jordan 1 Low G.webp',
    id: '4',
  },
  {
    price: 13299,
    name: 'Air Jordan 1 Mid',
    avatar: './src/img/sneakers/Air Jordan 1 Mid.webp',
    id: '5',
  },
  {
    price: 13299,
    name: 'Nike Air Max 270',
    avatar: './src/img/sneakers/Nike Air Max 270.webp',
    id: '6',
  },
  {
    price: 12999,
    name: 'Nike Air Max Plus',
    avatar: './src/img/sneakers/Nike Air Max Plus.webp',
    id: '7',
  },
  {
    price: 13299,
    name: 'Nike Air Monarch IV',
    avatar: './src/img/sneakers/Nike Air Monarch IV.webp',
    id: '8',
  },
  {
    price: 13299,
    name: "Nike Blazer Mid '77 Vintage",
    avatar: "./src/img/sneakers/Nike Blazer Mid '77 Vintage.webp",
    id: '9',
  },
  {
    price: 13299,
    name: 'Nike Dunk High Retro',
    avatar: './src/img/sneakers/Nike Dunk High Retro.webp',
    id: '10',
  },
];

const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {},
});

export default sneakersSlice.reducer;

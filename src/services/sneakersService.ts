import axios from 'axios';
import { URLS } from '../const/urls.ts';
import { IOrders, ISneaker } from '../const/interfaces.ts';

export const sneakersService = () => {
  const deleteCart = async (id: number) => {
    await axios.delete(String(new URL(`cart/${id}`, URLS.CART)));
  };

  const addCart = async (sneaker: ISneaker) => {
    await axios.post(String(URLS.CART), sneaker);
  };
  const addFavorite = async (sneaker: ISneaker) => {
    await axios.post(String(URLS.FAVORITES), sneaker);
  };

  const deleteFavorite = async (id: number) => {
    await axios.delete(String(new URL(`favorite/${id}`, URLS.FAVORITES)));
  };
  const getSneakers = async () => {
    const sneakersRes = await axios.get(String(URLS.SNEAKERS));
    return sneakersRes.data;
  };

  const getCart = async () => {
    const cartRes = await axios.get(String(URLS.CART));
    return cartRes.data;
  };

  const getFavorite = async () => {
    const favoritesRes = await axios.get(String(URLS.FAVORITES));
    return favoritesRes.data;
  };

  const clearCart = async () => {
    const carts = await axios.get(String(URLS.CART));
    carts.data.forEach((item: ISneaker) =>
      axios.delete(String(new URL(`cart/${item.id}`, URLS.CART)))
    );
  };

  const getOrders = async (): Promise<IOrders[]> => {
    const response = await axios.get(String(URLS.ORDERS));
    return response.data;
  };

  const createOrder = async (order: {
    date: Date;
    item: ISneaker[];
    id: string;
  }) => {
    const res = await axios.post(String(URLS.ORDERS), order);
    await clearCart();
    return res;
  };

  return {
    clearCart,
    createOrder,
    getOrders,
    getSneakers,
    getCart,
    getFavorite,
    deleteFavorite,
    addFavorite,
    addCart,
    deleteCart,
  };
};

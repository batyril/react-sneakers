import useHttp from '../hooks/http.hook.ts';
import { ISneaker } from '../../interfaces.ts';

function useSneakersService() {
  const [request] = useHttp();

  const apiBase = 'http://localhost:3000/';

  const postFavorites = async (sneaker: ISneaker) => {
    await request(`${apiBase}favorite`, 'POST', JSON.stringify(sneaker));
  };

  const getSneakers = async () => {
    return await request(`${apiBase}sneakers`);
  };

  const getFavorites = async () => {
    return await request(`${apiBase}favorite`);
  };

  const deleteFavorites = async (id: string) => {
    return await request(`${apiBase}favorite/${id}`, 'DELETE');
  };

  const addCartSneaker = async (sneaker: ISneaker) => {
    return await request(`${apiBase}cart`, 'POST', JSON.stringify(sneaker));
  };

  const addOrder = async (order) => {
    return await request(`${apiBase}orders`, 'POST', JSON.stringify(order));
  };

  const deleteCartSneaker = async (id: string) => {
    return await request(`${apiBase}cart/${id}`, 'DELETE');
  };

  const getCart = async () => {
    return await request(`${apiBase}cart`);
  };

  const getOrders = async () => {
    return await request(`${apiBase}orders`);
  };
  const clearCart = async () => {
    const carts = await request(`${apiBase}cart`);
    carts.forEach((item: ISneaker) =>
      request(`${apiBase}cart/${item.id}`, 'DELETE')
    );
  };

  return {
    getSneakers,
    addCartSneaker,
    getCart,
    deleteCartSneaker,
    postFavorites,
    getFavorites,
    deleteFavorites,
    addOrder,
    clearCart,
    getOrders,
  };
}

export default useSneakersService;

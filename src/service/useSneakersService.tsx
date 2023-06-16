import useHttp from '../hooks/http.hook.ts';
import { IOrders, ISneaker } from '../../interfaces.ts';

function useSneakersService() {
  const { request } = useHttp();

  const apiBase = ' http://localhost:3000/';

  const postFavorites = (sneaker: ISneaker) => {
    return request(`${apiBase}favorite`, 'POST', JSON.stringify(sneaker));
  };

  const getSneakers = () => {
    return request(`${apiBase}sneakers`);
  };

  const getFavorites = () => {
    return request(`${apiBase}favorite`);
  };

  const deleteFavorites = (id: string) => {
    return request(`${apiBase}favorite/${id}`, 'DELETE');
  };

  const addCartSneaker = (sneaker: ISneaker) => {
    return request(`${apiBase}cart`, 'POST', JSON.stringify(sneaker));
  };

  const addOrder = (order: IOrders) => {
    return request(`${apiBase}orders`, 'POST', JSON.stringify(order));
  };

  const deleteCartSneaker = (id: string) => {
    return request(`${apiBase}cart/${id}`, 'DELETE');
  };

  const getCart = () => {
    return request(`${apiBase}cart`);
  };

  const getOrders = () => {
    return request(`${apiBase}orders`);
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

import useHttp from '../src/hooks/http.hook';
import { ISneaker } from '../interfaces.ts';

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

  const deleteCartSneaker = async (id: string) => {
    return await request(`${apiBase}cart/${id}`, 'DELETE');
  };

  const getCart = async () => {
    return await request(`${apiBase}cart`);
  };

  return {
    getSneakers,
    addCartSneaker,
    getCart,
    deleteCartSneaker,
    postFavorites,
    getFavorites,
    deleteFavorites,
  };
}

export default useSneakersService;

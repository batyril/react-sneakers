import useHttp from '../src/hooks/http.hook';
import { ISneaker } from '../interfaces.ts';

function useSneakersService() {
  const [request] = useHttp();

  const apiBase = 'https://646fd4b309ff19b12087cd2e.mockapi.io/';

  const getSneakers = async () => {
    return await request(`${apiBase}sneakers`);
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

  return { getSneakers, addCartSneaker, getCart, deleteCartSneaker };
}

export default useSneakersService;

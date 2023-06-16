import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { Favorites } from '../../pages/Favorites';
import { Orders } from '../../pages/Orders';
import { Error404 } from '../../pages/Error404';

import { AppContext } from '../../context/AppContext.ts';
import useSneakersService from '../../service/useSneakersService.tsx';
import useFinalPrice from '../../hooks/useFinalPrice.ts';

import { ISneaker, SneakersType } from '../../../interfaces.ts';

function App() {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);
  const [cartSneakers, setCartSneakers] = useState<SneakersType | []>([]);
  const [allSneakers, setAllSneakers] = useState<SneakersType | []>([]);
  const [favorites, setFavorites] = useState<SneakersType | []>([]);
  const [searchName, setSearchName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const finalPrice: number = useFinalPrice(cartSneakers);

  const {
    getFavorites,
    getSneakers,
    postFavorites,
    addCartSneaker,
    getCart,
    deleteCartSneaker,
    deleteFavorites,
  } = useSneakersService();
  const onAddFavorite = (sneaker: ISneaker) => {
    if (favorites.some((item) => item.id === sneaker.id)) {
      deleteFavorites(sneaker.id);
      setFavorites((prev) => prev.filter((item) => item.id !== sneaker.id));
    } else {
      postFavorites(sneaker);
      setFavorites((prev) => [...prev, sneaker]);
    }
  };

  //TODO: переделать под Immer
  const onAddCart = (obj: ISneaker) => {
    if (cartSneakers.some((item) => item.id === obj.id)) {
      deleteCartSneaker(obj.id);
      setCartSneakers((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      addCartSneaker(obj);
      setCartSneakers((prev) => [...prev, obj]);
    }
  };

  const onDeleteCart = (id: string) => {
    setCartSneakers((prevState) => prevState.filter((item) => item.id !== id));
    deleteCartSneaker(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      //TODO: переписать под promise all
      setIsLoading(true);
      const cartRes = await getCart();
      const favoritesRes = await getFavorites();
      const sneakersRes = await getSneakers();

      setCartSneakers(cartRes);
      setFavorites(favoritesRes);
      setAllSneakers(sneakersRes);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        searchName,
        setSearchName,
        cartSneakers,
        favorites,
        onDeleteCart,
        allSneakers,
        isLoading,
        onAddCart,
        onAddFavorite,
        setSideMenuOpened,
        sideMenuOpened,
        setCartSneakers,
        finalPrice,
      }}
    >
      <Routes>
        <Route path='/' element={<Home allSneakers={allSneakers} />}></Route>
        <Route
          path='/favorite'
          element={<Favorites favorites={favorites} />}
        ></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;

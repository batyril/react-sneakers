import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { Favorites } from '../../pages/Favorites';
import { Orders } from '../../pages/Orders';
import { Error404 } from '../../pages/Error404';

import { AppContext } from '../../context/AppContext.ts';
import useFinalPrice from '../../hooks/useFinalPrice.ts';

import { ISneaker, SneakersType } from '../../const/interfaces.ts';

import axios from 'axios';
import { URLS } from '../../const/urls.ts';

function App() {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);
  const [cartSneakers, setCartSneakers] = useState<SneakersType | []>([]);
  const [allSneakers, setAllSneakers] = useState<SneakersType | []>([]);
  const [favorites, setFavorites] = useState<SneakersType | []>([]);
  const [searchName, setSearchName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const finalPrice: number = useFinalPrice(cartSneakers);

  const onAddFavorite = (sneaker: ISneaker) => {
    if (favorites.some((item) => item.id === sneaker.id)) {
      axios.delete(String(new URL(`favorite/${sneaker.id}`, URLS.FAVORITES)));
      setFavorites((prev) => prev.filter((item) => item.id !== sneaker.id));
    } else {
      axios.post(String(URLS.FAVORITES), sneaker);
      setFavorites((prev) => [...prev, sneaker]);
    }
  };

  //TODO: переделать под Immer
  const onAddCart = (obj: ISneaker) => {
    if (cartSneakers.some((item) => item.id === obj.id)) {
      setCartSneakers((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      axios.post(String(URLS.CART), obj);
      setCartSneakers((prev) => [...prev, obj]);
    }
  };

  const onDeleteCart = (id: string) => {
    axios.delete(String(new URL(`cart/${id}`, URLS.CART)));
    setCartSneakers((prevState) => prevState.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      //TODO: переписать под promise all
      setIsLoading(true);
      const cartRes = await axios.get(String(URLS.CART));
      const favoritesRes = await axios.get(String(URLS.FAVORITES));
      const sneakersRes = await axios.get(String(URLS.SNEAKERS));

      setCartSneakers(cartRes.data);
      setFavorites(favoritesRes.data);
      setAllSneakers(sneakersRes.data);

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

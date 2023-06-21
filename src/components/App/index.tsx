import { useEffect } from 'react';
import { useImmer } from 'use-immer';
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

export const App = () => {
  const [sideMenuOpened, setSideMenuOpened] = useImmer(false);
  const [cartSneakers, setCartSneakers] = useImmer<SneakersType | []>([]);
  const [allSneakers, setAllSneakers] = useImmer<SneakersType | []>([]);
  const [searchName, setSearchName] = useImmer('');
  const [isLoading, setIsLoading] = useImmer(false);
  const finalPrice: number = useFinalPrice(cartSneakers);
  const [favoriteSneakers, setFavoritesSneakers] = useImmer<SneakersType | []>(
    []
  );

  const updateFavorite = async (sneaker: ISneaker) => {
    const isInFavorites = favoriteSneakers.some(
      (item) => item.id === sneaker.id
    );
    try {
      if (isInFavorites) {
        deleteFromFavorites(sneaker.id);
      } else {
        addToFavorites(sneaker);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else if (typeof error === 'string') {
        console.log(error);
      }
    }
  };

  const deleteFromFavorites = async (id: string) => {
    try {
      await axios.delete(String(new URL(`favorite/${id}`, URLS.FAVORITES)));
      setFavoritesSneakers((prev) => prev.filter((item) => item.id !== id));
    } catch (e) {
      throw new Error('Не удалось удалить элемент из избранного');
    }
  };

  const addToFavorites = async (sneaker: ISneaker) => {
    try {
      await axios.post(String(URLS.FAVORITES), sneaker);
      setFavoritesSneakers((prev) => [...prev, sneaker]);
    } catch (e) {
      throw new Error('Не удалось добавить элемент в избранное');
    }
  };

  const updateCart = async (sneaker: ISneaker) => {
    const isInCart = cartSneakers.some((item) => item.id === sneaker.id);
    try {
      if (isInCart) {
        deleteFromCart(sneaker.id);
      } else {
        addToCart(sneaker);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else if (typeof error === 'string') {
        console.log(error);
      }
    }
  };

  const deleteFromCart = async (id: string) => {
    try {
      await axios.delete(String(new URL(`cart/${id}`, URLS.CART)));
      setCartSneakers((prev) => prev.filter((item) => item.id !== id));
    } catch (e) {
      throw new Error('Не удалось удалить элемент из корзины');
    }
  };

  const addToCart = async (sneaker: ISneaker) => {
    try {
      await axios.post(String(URLS.CART), sneaker);
      setCartSneakers((prev) => [...prev, sneaker]);
    } catch (e) {
      throw new Error('Не удалось добавить элемент в корзину');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const cartRes = await axios.get(String(URLS.CART));
        const favoritesRes = await axios.get(String(URLS.FAVORITES));
        const sneakersRes = await axios.get(String(URLS.SNEAKERS));

        setCartSneakers(cartRes.data);
        setFavoritesSneakers(favoritesRes.data);
        setAllSneakers(sneakersRes.data);

        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else if (typeof error === 'string') {
          console.log(error);
        }
      }
    };

    fetchData();
  }, [setAllSneakers, setCartSneakers, setFavoritesSneakers, setIsLoading]);

  return (
    <AppContext.Provider
      value={{
        searchName,
        setSearchName,
        cartSneakers,
        favoriteSneakers,
        allSneakers,
        isLoading,
        updateFavorite,
        updateCart,
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
          element={<Favorites favorites={favoriteSneakers} />}
        ></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </AppContext.Provider>
  );
};

import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { Favorites } from '../../pages/Favorites';
import { Orders } from '../../pages/Orders';
import { Error404 } from '../../pages/Error404';

import { AppContext } from '../../context/AppContext.ts';

import { ISneaker, SneakersType } from '../../const/interfaces.ts';

import useFinalPrice from '../../hooks/useFinalPrice.ts';
import { TanStackQueryService } from '../../services/TanStackQueryService.ts';

export const App = () => {
  const [sideMenuOpened, setSideMenuOpened] = useImmer(false);
  const [cartSneakers, setCartSneakers] = useImmer<SneakersType | []>([]);
  const [allSneakers, setAllSneakers] = useImmer<SneakersType | []>([]);
  const [searchName, setSearchName] = useImmer('');
  const finalPrice: number = useFinalPrice(cartSneakers);
  const [favoriteSneakers, setFavoritesSneakers] = useImmer<SneakersType | []>(
    []
  );

  const {
    sneakersData,
    isLoadingSneakers,
    cartData,
    favoriteData,
    deleteFromCart,
    addToCart,
    addToFavorites,
    deleteFromFavorites,
  } = TanStackQueryService();

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

  useEffect(() => {
    if (cartData && favoriteData && sneakersData) {
      setCartSneakers(cartData);
      setFavoritesSneakers(favoriteData);
      setAllSneakers(sneakersData);
    }
  }, [
    cartData,
    favoriteData,
    setAllSneakers,
    setCartSneakers,
    setFavoritesSneakers,
    sneakersData,
  ]);

  return (
    <AppContext.Provider
      value={{
        searchName,
        setSearchName,
        cartSneakers,
        favoriteSneakers,
        allSneakers,
        isLoadingSneakers,
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

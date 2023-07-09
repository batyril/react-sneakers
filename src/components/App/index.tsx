import { useImmer } from 'use-immer';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { Favorites } from '../../pages/Favorites';
import { Orders } from '../../pages/Orders';
import { Error404 } from '../../pages/Error404';

import { AppContext } from '../../context/AppContext.ts';

import { ISneaker } from '../../const/interfaces.ts';

import useFinalPrice from '../../hooks/useFinalPrice.ts';

import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../store/favoriteSlice.ts';

import { RootState } from '../../store';
import { deleteCart, addCart } from '../../store/cartSlice.ts';
export const App = () => {
  const [sideMenuOpened, setSideMenuOpened] = useImmer(false);
  const [searchName, setSearchName] = useImmer('');
  const favoriteSneakers = useSelector((state: RootState) => state.favorite);
  const cartSneakers = useSelector((state: RootState) => state.cart);
  const finalPrice: number = useFinalPrice(cartSneakers);
  const dispatch = useDispatch();

  const updateFavorite = async (sneaker: ISneaker) => {
    const isInFavorites = favoriteSneakers.some(
      (item) => item.id === sneaker.id
    );
    try {
      if (isInFavorites) {
        dispatch(deleteFavorite(sneaker.id));
      } else {
        dispatch(addFavorite(sneaker));
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
        dispatch(deleteCart(sneaker.id));
      } else {
        dispatch(addCart(sneaker));
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else if (typeof error === 'string') {
        console.log(error);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        searchName,
        setSearchName,
        updateFavorite,
        updateCart,
        setSideMenuOpened,
        sideMenuOpened,
        finalPrice,
      }}
    >
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/favorite' element={<Favorites />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </AppContext.Provider>
  );
};

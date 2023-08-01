// Импорты из внешних библиотек
import { useImmer } from 'use-immer';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// Импорты страниц
import { Home } from '../../pages/Home';
import { Favorites } from '../../pages/Favorites';
import { Orders } from '../../pages/Orders';
import { Error404 } from '../../pages/Error404';
import { Sneaker } from '../../pages/Sneaker';

// Импорт контекста
import { AppContext } from '../../context/AppContext.ts';

// Импорт интерфейса
import { PATHS } from '../../const/path.ts';

// Импорт пользовательского хука
import useFinalPrice from '../../hooks/useFinalPrice.ts';

// Импорты Redux экшенов
import { fetchFavorite } from '../../store/favoriteSlice.ts';

// Импорты Redux экшенов для корзины
import { AppDispatch, RootState } from '../../store';

import { fetchCart } from '../../store/cartSlice.ts';

// Импорт Redux экшенов для списка кроссовок
import { fetchSneakers } from '../../store/sneakersSlice.ts';

export const App = () => {
  const [sideMenuOpened, setSideMenuOpened] = useImmer(false);
  const [searchName, setSearchName] = useImmer('');

  const cartSneakers = useSelector(
    (state: RootState) => state.cartDetails.cart
  );
  const finalPrice: number = useFinalPrice(cartSneakers);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSneakers());
    dispatch(fetchFavorite());
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <AppContext.Provider
      value={{
        searchName,
        setSearchName,
        setSideMenuOpened,
        sideMenuOpened,
        finalPrice,
      }}
    >
      <Routes>
        <Route path={PATHS.HOME} element={<Home />}></Route>
        <Route path={PATHS.FAVORITE} element={<Favorites />}></Route>
        <Route path={PATHS.ORDERS} element={<Orders />}></Route>
        <Route path={PATHS.ERROR} element={<Error404 />}></Route>
        <Route path={PATHS.SNEAKER} element={<Sneaker />} />
      </Routes>
    </AppContext.Provider>
  );
};

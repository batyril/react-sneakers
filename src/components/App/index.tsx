import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home.tsx';
import { Favorites } from '../../pages/Favorites.tsx';
import { useEffect, useState } from 'react';
import { ISneaker, sneakersType } from '../../../interfaces.ts';
import useSneakersService from '../../../Service/useSneakersService.tsx';

function App() {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);
  const [cartSneakers, setCartSneakers] = useState<sneakersType | []>([]);
  const [allSneakers, setAllSneakers] = useState<sneakersType | []>([]);
  const [favorites, setFavorites] = useState<sneakersType | []>([]);
  const [searchName, setSearchName] = useState('');
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
  //TODO: сделать поиск дубликатов
  const onAddCart = (obj: ISneaker) => {
    if (cartSneakers.some((item) => item.id === obj.id)) {
      deleteCartSneaker(obj.id);
      setCartSneakers((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      addCartSneaker(obj).then(() => {
        setCartSneakers((prev) => [...prev, obj]);
      });
    }
  };

  const onDeleteCart = (id: string) => {
    setCartSneakers((prevState) => prevState.filter((item) => item.id !== id));
    deleteCartSneaker(id);
  };

  useEffect(() => {
    getCart().then((res) => setCartSneakers(res));
    getFavorites().then((res) => setFavorites(res));
    getSneakers().then((res) => setAllSneakers(res));
  }, []);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Home
            favorites={favorites}
            setSideMenuOpened={setSideMenuOpened}
            allSneakers={allSneakers}
            searchName={searchName}
            cartSneakers={cartSneakers}
            sideMenuOpened={sideMenuOpened}
            onDeleteCart={onDeleteCart}
            onAddCart={onAddCart}
            onAddFavorite={onAddFavorite}
            setSearchName={setSearchName}
          />
        }
      ></Route>
      <Route
        path='/favorite'
        element={
          <Favorites
            onAddFavorite={onAddFavorite}
            onAddCart={onAddCart}
            items={favorites}
            sideMenuOpened={sideMenuOpened}
            setSideMenuOpened={setSideMenuOpened}
            onDeleteCart={onDeleteCart}
            cartSneakers={cartSneakers}
          />
        }
      ></Route>
    </Routes>
  );
}

export default App;

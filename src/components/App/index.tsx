import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home.tsx';
import { Favorites } from '../../pages/Favorites.tsx';
import { useEffect, useState } from 'react';
import { ISneaker, sneakersType } from '../../../interfaces.ts';
import { AppContext } from '../../context/AppContext.ts';
import useSneakersService from '../../service/useSneakersService.tsx';

function App() {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);
  const [cartSneakers, setCartSneakers] = useState<sneakersType | []>([]);
  const [allSneakers, setAllSneakers] = useState<sneakersType | []>([]);
  const [favorites, setFavorites] = useState<sneakersType | []>([]);
  const [searchName, setSearchName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
    const fetchData = async () => {
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
      }}
    >
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/favorite' element={<Favorites />}></Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;

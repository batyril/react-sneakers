import Header from '../Header';
import Slider from '../Slider';
import SneakersList from '../SneakerList';
import SideMenu from '../SideMenu';
import { useEffect, useState } from 'react';
import { FormContext } from '../../context/FormContext.ts';
import { sneakersType, ISneaker } from '../../../interfaces.ts';
import useSneakersService from '../../../Service/useSneakersService.tsx';

function App() {
  const [sideMenuOpened, setSideMenuOpened] = useState(false);
  const [cartSneakers, setCartSneakers] = useState<sneakersType | []>([]);
  const [allSneakers, setAllSneakers] = useState<sneakersType | []>([]);
  const [favorites, setFavorites] = useState<sneakersType | []>([]);
  const [searchName, setSearchName] = useState('');
  const { getSneakers, addCartSneaker, getCart, deleteCartSneaker } =
    useSneakersService();
  const onaAddFavorite = (obj: ISneaker) => {
    setFavorites((prev) => [...prev, obj]);
  };

  //TODO: переделать под Immer
  //TODO: сделать поиск дубликатов
  const onAddCart = (obj: ISneaker) => {
    /*    const isRepeated = cartSneakers.some(
      (item: ISneaker) => item.id === obj.id
    );
    if (!isRepeated) {
      setCartSneakers((prev) => [...prev, obj]);
    }*/
    addCartSneaker(obj).then(() => {
      setCartSneakers((prev) => [...prev, obj]);
    });
  };

  const onDeleteCart = (id: string) => {
    setCartSneakers((prevState) => prevState.filter((item) => item.id !== id));
    deleteCartSneaker(id);
  };

  useEffect(() => {
    getCart().then((res) => setCartSneakers(res));
    getSneakers().then((res) => setAllSneakers(res));
  }, []);

  return (
    <>
      {sideMenuOpened ? (
        <SideMenu
          onDeleteCart={onDeleteCart}
          sneakers={cartSneakers}
          onClose={setSideMenuOpened}
        />
      ) : null}
      <Header onClickCart={setSideMenuOpened} />
      <section className='content'>
        <Slider />
        <FormContext.Provider value={{ searchName, setSearchName }}>
          <SneakersList
            addFavorite={onaAddFavorite}
            addSideMenu={onAddCart}
            sneakers={allSneakers}
          />
        </FormContext.Provider>
      </section>
    </>
  );
}

export default App;

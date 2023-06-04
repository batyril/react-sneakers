import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import Slider from '../components/Slider';
import { FormContext } from '../context/FormContext.ts';
import SneakersList from '../components/SneakerList';

function Home({
  sideMenuOpened,
  setSideMenuOpened,
  onDeleteCart,
  onAddCart,
  onAddFavorite,
  allSneakers,
  searchName,
  cartSneakers,
  setSearchName,
  favorites,
}) {
  return (
    <>
      {' '}
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
        <FormContext.Provider
          value={{ searchName, setSearchName, cartSneakers, favorites }}
        >
          <SneakersList
            addFavorite={onAddFavorite}
            addSideMenu={onAddCart}
            sneakers={allSneakers}
          />
        </FormContext.Provider>
      </section>
    </>
  );
}

export { Home };

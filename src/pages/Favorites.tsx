import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Slider from '../components/Slider';
import SneakersList from '../components/SneakerList';

function Favorites({
  setSideMenuOpened,
  onDeleteCart,
  cartSneakers,
  sideMenuOpened,
  onAddFavorite,
  onAddCart,
  items,
}) {
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
        <SneakersList
          addFavorite={onAddFavorite}
          addSideMenu={onAddCart}
          sneakers={items}
        />
      </section>
    </>
  );
}
export { Favorites };

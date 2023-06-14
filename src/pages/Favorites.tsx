import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import SneakersList from '../components/SneakerList';

function Favorites({ favorites, sideMenuOpened }) {
  const title = 'Мои избранные';
  return (
    <>
      {sideMenuOpened ? <SideMenu /> : null}
      <Header />
      <section className='content'>
        <SneakersList title={title} sneakers={favorites} />
      </section>
    </>
  );
}
export { Favorites };

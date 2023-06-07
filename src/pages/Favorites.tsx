import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import Slider from '../components/Slider';
import SneakersList from '../components/SneakerList';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext.ts';

function Favorites() {
  const { sideMenuOpened, favorites } = useContext(AppContext);
  return (
    <>
      {sideMenuOpened ? <SideMenu /> : null}
      <Header />
      <section className='content'>
        <Slider />
        <SneakersList sneakers={favorites} />
      </section>
    </>
  );
}
export { Favorites };

import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import Slider from '../components/Slider';

import SneakersList from '../components/SneakerList';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext.ts';

function Home() {
  const { sideMenuOpened, allSneakers } = useContext(AppContext);
  return (
    <>
      {' '}
      {sideMenuOpened ? <SideMenu /> : null}
      <Header />
      <section className='content'>
        <Slider />
        <SneakersList sneakers={allSneakers} />
      </section>
    </>
  );
}

export { Home };

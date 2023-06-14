import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import Slider from '../components/Slider';
import SneakersList from '../components/SneakerList';

function Home({ sideMenuOpened, allSneakers }) {
  const title = 'Все кроссовки';
  return (
    <>
      {' '}
      {sideMenuOpened ? <SideMenu /> : null}
      <Header />
      <section className='content'>
        <Slider />
        <SneakersList title={title} sneakers={allSneakers} />
      </section>
    </>
  );
}

export { Home };

import SideMenu from '../../components/SideMenu';
import Header from '../../components/Header';
import Slider from '../../components/Slider';
import SneakersList from '../../components/SneakerList';

export function Home({ allSneakers }) {
  const title = 'Все кроссовки';
  return (
    <>
      <SideMenu />
      <Header />
      <section className='content'>
        <Slider />
        <SneakersList title={title} sneakers={allSneakers} />
      </section>
    </>
  );
}
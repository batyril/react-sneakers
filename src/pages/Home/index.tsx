import SideMenu from '../../components/SideMenu';
import { Header } from '../../components/Header';
import { Slider } from '../../components/Slider';
import { SneakerList } from '../../components/SneakerList';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Home = () => {
  const sneakers = useSelector((state: RootState) => state.sneakers);
  const title = 'Все кроссовки';
  return (
    <>
      <SideMenu />
      <Header />
      <section className='content'>
        <Slider />
        <SneakerList title={title} sneakers={sneakers} />
      </section>
    </>
  );
};

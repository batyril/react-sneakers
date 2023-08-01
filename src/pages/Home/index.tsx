// Компоненты
import SideMenu from '../../components/SideMenu';
import { Header } from '../../components/Header';
import { Slider } from '../../components/Slider';
import { SneakerList } from '../../components/SneakerList';
// Импорт хука из React Redux
import { useSelector } from 'react-redux';
// Импорт типа RootState из файла store
import { RootState } from '../../store';

export const Home = () => {
  const { sneakers, status } = useSelector(
    (state: RootState) => state.sneakersDetails
  );
  const title = 'Все кроссовки';
  return (
    <>
      <SideMenu />
      <Header />
      <section className='content'>
        <Slider />
        <SneakerList
          isLoadingSneakers={status}
          title={title}
          sneakers={sneakers}
        />
      </section>
    </>
  );
};

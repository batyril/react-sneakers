import { Header } from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import { SneakerList } from '../../components/SneakerList';
import { Blank } from '../../components/Blank';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Favorites = () => {
  const favorites = useSelector((state: RootState) => state.favorite);
  const title = 'Мои избранные';
  return (
    <>
      <SideMenu />
      <Header />
      <section className='content'>
        {favorites.length > 0 ? (
          <SneakerList title={title} sneakers={favorites} />
        ) : (
          <Blank />
        )}
      </section>
    </>
  );
};

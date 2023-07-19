import { Header } from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import { SneakerList } from '../../components/SneakerList';
import { Blank } from '../../components/Blank';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Favorites = () => {
  const { favorite, status } = useSelector(
    (state: RootState) => state.favoriteDetails
  );
  const title = 'Мои избранные';
  return (
    <>
      <SideMenu />
      <Header />
      <section className='content'>
        {favorite.length > 0 ? (
          <SneakerList
            isLoadingSneakers={status}
            title={title}
            sneakers={favorite}
          />
        ) : (
          <Blank />
        )}
      </section>
    </>
  );
};

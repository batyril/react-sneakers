import { Header } from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import { SneakerList } from '../../components/SneakerList';
import { Blank } from '../../components/Blank';
import { SneakersType } from '../../const/interfaces.ts';

interface IFavorites {
  favorites: SneakersType | [];
}

export const Favorites = ({ favorites }: IFavorites) => {
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

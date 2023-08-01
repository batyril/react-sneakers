// Импорты компонентов
import { Search } from '../Search';
import { CardItem } from '../CardItem';
import { Skeleton } from '../Skeleton';
// Импорт стилей в CSS-модули для компонента SneakerList
import styles from './SneakerList.module.scss';
// Импорт хука useContext из React
import { useContext } from 'react';
// Импорт контекста
import { AppContext } from '../../context/AppContext.ts';
// Импорт интерфейсов
import { SneakersType } from '../../const/interfaces.ts';
// Импорт помощников
import { getCroppedString } from '../../helpers/getСroppedString.ts';
import { updateFavorite } from '../../helpers/updateFavorite.ts';
import { updateCart } from '../../helpers/updateCart.ts';
// Импорт хуков для работы с Redux
import { useDispatch, useSelector } from 'react-redux';
// Импорт типов
import { AppDispatch, RootState } from '../../store';

interface ISneakerList {
  title: string;
  sneakers: SneakersType;
  isLoadingSneakers: 'loading' | 'resolved' | 'rejected';
}

export const SneakerList = ({
  title,
  sneakers,
  isLoadingSneakers,
}: ISneakerList) => {
  const dispatch = useDispatch<AppDispatch>();
  const favoriteSneakers = useSelector(
    (state: RootState) => state.favoriteDetails.favorite
  );
  const cartSneakers = useSelector(
    (state: RootState) => state.cartDetails.cart
  );
  const { searchName } = useContext(AppContext);
  const renderItem = () => {
    if (isLoadingSneakers === 'loading') {
      return [...Array(10)].map((_, index) => <Skeleton key={index} />);
    }

    return sneakers
      .filter((item) =>
        item.name.toLowerCase().includes(searchName.toLowerCase())
      )
      .map((sneaker) => {
        return (
          <CardItem
            {...sneaker}
            key={sneaker.id}
            addCart={() => updateCart(sneaker, dispatch, cartSneakers)}
            addFavorite={() =>
              updateFavorite(sneaker, dispatch, favoriteSneakers)
            }
          />
        );
      });
  };
  return (
    <div className={styles.sneakers}>
      <div className={styles.sneakers__top}>
        <h3 className={styles.sneakers__title}>
          {searchName ? `Поиск по ${getCroppedString(searchName)}` : title}
        </h3>
        <Search></Search>
      </div>
      <div className={styles.sneakers__list}>{renderItem()}</div>
    </div>
  );
};

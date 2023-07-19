import { Search } from '../Search';
import { CardItem } from '../CardItem';
import styles from './SneakerList.module.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext.ts';
import { Skeleton } from '../Skeleton';
import { SneakersType } from '../../const/interfaces.ts';
import { getCroppedString } from '../../helpers/getСroppedString.ts';

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
  const { searchName, updateFavorite, updateCart } = useContext(AppContext);
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
            addSideMenu={() => {
              if (updateCart) {
                updateCart(sneaker);
              }
            }}
            addFavorite={() =>
              updateFavorite ? updateFavorite(sneaker) : null
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

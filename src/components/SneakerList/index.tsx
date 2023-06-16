import Search from '../Search';
import CardItem from '../CardItem';
import styles from './SneakerList.module.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext.ts';
import { Skeleton } from '../Skeleton';
import { SneakersType } from '../../const/interfaces.ts';
import { getCroppedString } from '../../helpers/getСroppedString.ts';

interface ISneakerList {
  title: string;
  sneakers: SneakersType;
}

function SneakerList({ title, sneakers }: ISneakerList) {
  const { searchName, isLoading, onAddFavorite, onAddCart } =
    useContext(AppContext);
  const renderItem = () => {
    if (isLoading) {
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
              onAddCart(sneaker);
            }}
            addFavorite={() => onAddFavorite(sneaker)}
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
}

export default SneakerList;

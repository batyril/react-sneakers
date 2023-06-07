import Search from '../Search';
import Card from '../Card';
import styles from './SneakerList.module.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext.ts';
import { Skeleton } from '../Skeleton';

function SneakerList({ sneakers }) {
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
          <Card
            {...sneaker}
            key={sneaker.id}
            addSideMenu={() => onAddCart(sneaker)}
            addFavorite={() => onAddFavorite(sneaker)}
          />
        );
      });
  };
  //TODO: добавить обрезание после значения
  return (
    <div className={styles.sneakers}>
      <div className={styles.sneakers__top}>
        <h3 className={styles.sneakers__title}>
          {searchName ? `Поиск по ${searchName}` : 'Все кроссовки'}
        </h3>
        <Search></Search>
      </div>
      <div className={styles.sneakers__list}>{renderItem()}</div>
    </div>
  );
}

export default SneakerList;

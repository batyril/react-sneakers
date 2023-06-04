import Search from '../Search';
import Card from '../Card';
import styles from './SneakerList.module.scss';
import { useContext } from 'react';
import { FormContext } from '../../context/FormContext.ts';
import { ISneaker, sneakersType } from '../../../interfaces.ts';

interface SneakerListType {
  sneakers: sneakersType;
  addSideMenu: (obj: ISneaker) => void;
  addFavorite: (obj: ISneaker) => void;
}

function SneakerList({ sneakers, addSideMenu, addFavorite }: SneakerListType) {
  const { searchName } = useContext(FormContext);
  //TODO: добавить обрезание после значения
  return (
    <div className={styles.sneakers}>
      <div className={styles.sneakers__top}>
        <h3 className={styles.sneakers__title}>
          {searchName ? `Поиск по ${searchName}` : 'Все кроссовки'}
        </h3>
        <Search></Search>
      </div>
      <div className={styles.sneakers__list}>
        {sneakers
          .filter((item) =>
            item.name.toLowerCase().includes(searchName.toLowerCase())
          )
          .map((sneaker) => {
            return (
              <Card
                {...sneaker}
                key={sneaker.id}
                addSideMenu={() => addSideMenu(sneaker)}
                addFavorite={() => addFavorite(sneaker)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default SneakerList;

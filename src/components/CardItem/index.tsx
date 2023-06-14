import plusIcon from '../../img/plus.svg';
import favorite from '../../img/favorite.svg';
import noFavorite from '../../img/no-favorite.svg';
import deleteCard from '../../img/deleteCart.svg';
import styles from './CardItem.module.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext.ts';

interface ICardItem {
  avatar: string;
  price: number;
  name: string;
  id: string;
  addSideMenu?: () => void;
  addFavorite?: () => void;
}

export default function CardItem({
  avatar,
  price,
  name,
  addSideMenu,
  addFavorite,
  id,
}: ICardItem) {
  const { cartSneakers, favorites } = useContext(AppContext);
  const inCart = cartSneakers.some((item) => item.id === id);
  const isFavorite = favorites.some((item) => item.id === id);

  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        {addSideMenu && (
          <img
            onClick={addFavorite}
            className={styles.card__favorite}
            src={isFavorite ? favorite : noFavorite}
            alt='favorite'
          />
        )}

        <img className={styles.card__image} src={avatar} alt='sneaker' />
        <h3 className={styles.card__title}>{name}</h3>
      </div>
      <div className={styles.card__bottom}>
        <div className={styles.card__price}>
          <p>Цена</p>
          <span>{price}</span>
        </div>
        {addSideMenu && (
          <button
            onClick={addSideMenu}
            className={inCart ? styles.card__delete : styles.card__buy}
          >
            <img src={inCart ? deleteCard : plusIcon} alt='button' />
          </button>
        )}
      </div>
    </div>
  );
}

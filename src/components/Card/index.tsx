import plusIcon from '../../img/plus.svg';
import favorite from '../../img/favorite.svg';
import noFavorite from '../../img/no-favorite.svg';
import deleteCard from '../../img/deleteCart.svg';
import styles from './Card.module.scss';
import { useContext } from 'react';
import { FormContext } from '../../context/FormContext.ts';

interface CardProps {
  avatar: string;
  price: number;
  name: string;
  id: string;
  addSideMenu: () => void;
  addFavorite: () => void;
}

function Card({
  avatar,
  price,
  name,
  addSideMenu,
  addFavorite,
  id,
}: CardProps) {
  const { cartSneakers, favorites } = useContext(FormContext);
  const inCart = cartSneakers.some((item) => item.id === id);
  const isFavorite = favorites.some((item) => item.id === id);
  const onAddCart = () => {
    addSideMenu();
  };

  const onClickFavorite = () => {
    addFavorite();
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        <img
          onClick={onClickFavorite}
          className={styles.card__favorite}
          src={isFavorite ? favorite : noFavorite}
          alt='favorite'
        />
        <img className={styles.card__image} src={avatar} alt='sneaker' />
        <h3 className={styles.card__title}>{name}</h3>
      </div>
      <div className={styles.card__bottom}>
        <div className={styles.card__price}>
          <p>Цена</p>
          <span>{price}</span>
        </div>
        <button
          onClick={onAddCart}
          className={inCart ? styles.card__delete : styles.card__buy}
        >
          <img src={inCart ? deleteCard : plusIcon} alt='button' />
        </button>
      </div>
    </div>
  );
}

export default Card;

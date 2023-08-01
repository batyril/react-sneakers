// Импорты изображений в формате SVG для иконок
import plusIcon from '../../image/plus.svg';
import addFavoriteIcon from '../../image/add-favorites.svg';
import deleteFavorite from '../../image/delete-favorite.svg';
import deleteCard from '../../image/deleteCart.svg';

// Импорт стилей в CSS-модуль для компонента CardItem
import styles from './CardItem.module.scss';

// Импорты из React Redux
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

// Импорт компонента Link из React Router
import { Link } from 'react-router-dom';

interface ICardItem {
  avatar: string;
  price: number;
  name: string;
  id: number;
  addCart?: () => void;
  addFavorite?: () => void;
}

export const CardItem = ({
  avatar,
  price,
  name,
  addCart,
  addFavorite,
  id,
}: ICardItem) => {
  const favoriteSneakers = useSelector(
    (state: RootState) => state.favoriteDetails.favorite
  );
  const cartSneakers = useSelector(
    (state: RootState) => state.cartDetails.cart
  );
  const inCart = cartSneakers.some((item) => item.id === id);
  const isFavorite = favoriteSneakers.some((item) => item.id === id);

  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        {addFavorite && (
          <button onClick={addFavorite} className={styles.card__favorite}>
            <img
              src={isFavorite ? deleteFavorite : addFavoriteIcon}
              alt='favorite'
            />
          </button>
        )}
        <Link to={`/${id}`}>
          <img className={styles.card__image} src={avatar} alt='sneaker' />
        </Link>

        <h3 className={styles.card__title}>{name}</h3>
      </div>
      <div className={styles.card__bottom}>
        <div className={styles.card__price}>
          <p>Цена</p>
          <span>{price}</span>
        </div>
        {addCart && (
          <button
            onClick={addCart}
            className={inCart ? styles.card__delete : styles.card__buy}
          >
            <img src={inCart ? deleteCard : plusIcon} alt='button' />
          </button>
        )}
      </div>
    </div>
  );
};

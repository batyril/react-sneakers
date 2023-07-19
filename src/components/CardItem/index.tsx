import plusIcon from '../../img/plus.svg';
import addFavoriteIcon from '../../img/add-favorites.svg';
import deleteFavorite from '../../img/delete-favorite.svg';
import deleteCard from '../../img/deleteCart.svg';
import styles from './CardItem.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface ICardItem {
  avatar: string;
  price: number;
  name: string;
  id: number;
  parentID: number;
  addSideMenu?: () => void;
  addFavorite?: () => void;
}

export const CardItem = ({
  avatar,
  price,
  name,
  addSideMenu,
  addFavorite,
  id,
}: ICardItem) => {
  const favoriteSneakers = useSelector(
    (state: RootState) => state.favoriteDetails.favorite
  );
  const cartSneakers = useSelector(
    (state: RootState) => state.cartDetails.cart
  );
  const inCart = cartSneakers.some((item) => item.parentID === id);
  const isFavorite = favoriteSneakers.some((item) => item.parentID === id);

  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        {addSideMenu && (
          <button onClick={addFavorite} className={styles.card__favorite}>
            <img
              src={isFavorite ? deleteFavorite : addFavoriteIcon}
              alt='favorite'
            />
          </button>
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
};

// Импорт изображения в формате SVG для иконки "удалить из избранного"
import deleteIcon from '../../image/favorite-delete.svg';

// Импорт стилей в CSS-модули для компонента CartItem
import styles from './CartItem.module.scss';

interface ICartItem {
  avatar: string;
  name: string;
  price: number;
  onDeleteCart: () => void;
}
export const CartItem = ({ avatar, name, price, onDeleteCart }: ICartItem) => {
  return (
    <div className={styles.card}>
      <div>
        <img width='70px' height='70px' src={avatar} alt='' />
      </div>
      <div className={styles.card__body}>
        <p>{name}</p>
        <span>{price}</span>
      </div>
      <button onClick={onDeleteCart} className={styles.card__delete}>
        <img src={deleteIcon} alt='delete' />
      </button>
    </div>
  );
};

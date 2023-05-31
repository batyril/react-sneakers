import plusIcon from '../../img/plus.svg';
/*import favorite from '../../img/favorite.svg';*/
import noFavorite from '../../img/no-favorite.svg';
import deleteCard from '../../img/deleteCart.svg';
import styles from './Card.module.scss';

function AddCart({ onAdd }) {
  return (
    <button onClick={onAdd} className={styles.card__buy}>
      <img src={plusIcon} alt='plus' />
    </button>
  );
}

/*function DeleteCard({ onDelete }) {
  return (
    <button onClick={onDelete} className={styles.card__delete}>
      <img src={deleteCard} alt='delete' />
    </button>
  );
}*/

interface CardProps {
  avatar: string;
  price: number;
  name: string;
  addSideMenu: () => void;
  addFavorite: () => void;
}

function Card({ avatar, price, name, addSideMenu, addFavorite }: CardProps) {
  const onAddCart = () => {
    addSideMenu();
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        <img
          onClick={addFavorite}
          className={styles.card__favorite}
          src={noFavorite}
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
        <AddCart onAdd={onAddCart} />
        {/*        {isAdded ? (
          <DeleteCard onDelete={onDeleteCart} />
        ) : (
          <AddCart onAdd={onAddCart} />
        )}*/}
      </div>
    </div>
  );
}

export default Card;

import sneakersIcon from '../../img/sneak.jpg';
import plusIcon from '../../img/plus.svg';
/*import favorite from '../../img/favorite.svg';*/
import noFavorite from '../../img/no-favorite.svg';
import styles from './Card.module.scss';

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        <img
          className={styles.card__favorite}
          src={noFavorite}
          alt='favorite'
        />
        <img className={styles.card__image} src={sneakersIcon} alt='' />
        <h3 className={styles.card__title}>
          Мужские Кроссовки Nike Blazer Mid Suede
        </h3>
      </div>
      <div className={styles.card__bottom}>
        <div className={styles.card__price}>
          <p>Цена</p>
          <span>12 999 руб.</span>
        </div>
        <button className={styles.card__buy}>
          <img src={plusIcon} alt='plus' />
        </button>
      </div>
    </div>
  );
}

export default Card;

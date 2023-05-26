import sneakerIcon from '../../img/miniSneak.png';
import deleteIcon from '../../img/favorite-delete.svg';
import styles from './SideMenuItem.module.scss';

function SideMenuItem() {
  return (
    <div className={styles.card}>
      <div>
        <img width='70px' height='70px' src={sneakerIcon} alt='' />
      </div>
      <div className={styles.card__body}>
        <p>Мужские Кроссовки Nike Air Max 270</p>
        <span>12 999 руб.</span>
      </div>
      <button className={styles.card__delete}>
        <img src={deleteIcon} alt='delete' />
      </button>
    </div>
  );
}

export default SideMenuItem;

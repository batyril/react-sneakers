import deleteIcon from '../../img/favorite-delete.svg';
import styles from './SideMenuItem.module.scss';

interface SideMenuItem {
  avatar: string;
  name: string;
  price: number;
  onDeleteCart: () => void;
}
function SideMenuItem({ avatar, name, price, onDeleteCart }: SideMenuItem) {
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
}

export default SideMenuItem;

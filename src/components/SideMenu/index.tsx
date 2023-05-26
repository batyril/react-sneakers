import SideMenuItem from '../SideMenuItem';
import arrow from '../../img/arrow.svg';
import deleteIcon from '../../img/favorite-delete.svg';
import styles from './SideMenu.module.scss';

function SideMenu() {
  return (
    <div style={{ display: 'none' }} className={styles.overlay}>
      <div className={styles.sideMenu}>
        <h3 className={styles.sideMenu__title}>Корзина </h3>
        <button className={styles.sideMenu__close}>
          <img src={deleteIcon} alt='delete' />
        </button>
        <div className={styles.sideMenu__list}>
          <SideMenuItem />
          <SideMenuItem />
        </div>
        <div className={styles.total}>
          <p className={styles.total__text}>Итого</p>
          <div className={styles.total__border}></div>
          <p className={styles.total__price}>21 498 руб. </p>
        </div>
        <div className={styles.total}>
          <p className={styles.total__text}>Налог 5%: </p>
          <div className={styles.total__border}></div>
          <p className={styles.total__price}>1074 руб. </p>
        </div>
        <button className='side-menu__buy buy-btn'>
          <span className='buy-btn__text'>Оформить заказ </span>
          <img className='buy-btn__arrow' src={arrow} alt='arrow' />
        </button>
      </div>
    </div>
  );
}

export default SideMenu;

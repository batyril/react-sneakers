import styles from '../SideMenu/SideMenu.module.scss';
import SideMenuItem from '../SideMenuItem';
import arrow from '../../img/arrow.svg';
import { sneakersType } from '../../../interfaces.ts';

interface ICartList {
  sneakers: sneakersType;
  onDeleteCart: (idl: string) => void;
  onOrdered: () => void;
}
export default function CartList({
  sneakers,
  onDeleteCart,
  onOrdered,
}: ICartList) {
  return (
    <>
      <div className={styles.sideMenu__list}>
        {sneakers.map((sneaker) => {
          return (
            <SideMenuItem
              key={sneaker.id}
              {...sneaker}
              onDeleteCart={() => onDeleteCart(sneaker.id)}
            />
          );
        })}
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
      <button onClick={onOrdered} className='side-menu__buy buy-btn'>
        <span className='buy-btn__text'>Оформить заказ </span>
        <img className='buy-btn__arrow' src={arrow} alt='arrow' />
      </button>
    </>
  );
}

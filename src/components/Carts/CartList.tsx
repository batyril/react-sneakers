import styles from '../SideMenu/SideMenu.module.scss';
import CartItem from './CartItem.tsx';
import arrow from '../../img/arrow.svg';
import { SneakersType } from '../../../interfaces.ts';
import buttons from '../../scss/buttons.module.scss';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext.ts';
interface ICartList {
  sneakers: SneakersType;
  onDeleteCart: (idl: string) => void;
  onOrdered: () => void;
  isLoading: boolean;
}
export default function CartList({
  sneakers,
  onDeleteCart,
  onOrdered,
  isLoading,
}: ICartList) {
  const { finalPrice } = useContext(AppContext);
  const tax = Math.round(finalPrice * 0.05);
  return (
    <>
      <div className={styles.sideMenu__list}>
        {sneakers.map((sneaker) => {
          return (
            <CartItem
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
        <p className={styles.total__price}>{finalPrice} ₽ </p>
      </div>
      <div className={styles.total}>
        <p className={styles.total__text}>Налог 5%: </p>
        <div className={styles.total__border}></div>
        <p className={styles.total__price}>{tax} ₽ </p>
      </div>
      <button
        disabled={isLoading}
        onClick={onOrdered}
        className={buttons.button}
      >
        <span className={buttons.button__text}>Оформить заказ </span>
        {/*TODO: добавить анимацию покупки*/}
        <img className={buttons.buy__arrow} src={arrow} alt='arrow' />
      </button>
    </>
  );
}
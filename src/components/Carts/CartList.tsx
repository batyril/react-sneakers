// Импорты стилей в CSS-модули
import styles from '../SideMenu/SideMenu.module.scss';
import buttons from '../../scss/buttons.module.scss';
// Импорт компонента
import { CartItem } from './CartItem.tsx';
// Импорт изображения в формате SVG для стрелки
import arrow from '../../image/arrow.svg';
// Импорт интерфейсов ISneaker и SneakersType из файла interfaces.ts
import { ISneaker, SneakersType } from '../../const/interfaces.ts';
// Импорт хука useContext из React
import { useContext } from 'react';
// Импорт контекста
import { AppContext } from '../../context/AppContext.ts';

interface ICartList {
  sneakers: SneakersType;
  onDeleteCart: (sneaker: ISneaker) => void;
  onOrdered: () => void;
  isLoading: boolean;
}
export const CartList = ({
  sneakers,
  onDeleteCart,
  onOrdered,
  isLoading,
}: ICartList) => {
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
              onDeleteCart={() => onDeleteCart(sneaker)}
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
        className={`${buttons.button} ${styles.sideMenu__btnOrdered}`}
      >
        <span className={buttons.button__text}>Оформить заказ </span>
        <img className={buttons.buy__arrow} src={arrow} alt='arrow' />
      </button>
    </>
  );
};

import styles from '../SideMenu/SideMenu.module.scss';
import emptyIcon from '../../img/empty-cart.png';
import arrowBack from '../../img/arrow-back.svg';
import orderedImage from '../../img/ordered.png';

interface ICartInfo {
  onClose: () => void;
  isOrdered: boolean;
  orderId: string;
}
export default function CartInfo({ onClose, isOrdered, orderId }: ICartInfo) {
  return (
    <div className={styles.emptyCart}>
      <img
        width='120px'
        height='120px'
        src={isOrdered ? orderedImage : emptyIcon}
        alt='empty cart'
      />
      <h3 className={styles.emptyCart__title}>
        {isOrdered ? 'Заказ оформлен!' : 'Корзина пустая'}
      </h3>
      <p className={styles.emptyCart__text}>
        {isOrdered
          ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
          : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
      </p>
      <button onClick={onClose} className={styles.backBtn}>
        <span className={styles.backBtn__text}> Вернуться назад </span>
        <img className={styles.backBtn__arrow} src={arrowBack} alt='arrow' />
      </button>
    </div>
  );
}

import deleteIcon from '../../img/favorite-delete.svg';
import styles from './SideMenu.module.scss';
import { useContext, useRef, useState } from 'react';
import { AppContext } from '../../context/AppContext.ts';
import { CartList } from '../Carts/CartList.tsx';
import { CartInfo } from '../Carts/CartInfo.tsx';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890abcdef', 4);
import axios from 'axios';
import { URLS } from '../../const/urls.ts';
import { ISneaker } from '../../const/interfaces.ts';
import { useOutsideClick } from '../../hooks/useOutsideClick.ts';

function SideMenu() {
  const {
    setSideMenuOpened: onClose,
    cartSneakers,
    updateCart,
    setCartSneakers,
    sideMenuOpened,
  } = useContext(AppContext);

  const [isOrdered, setIsOrdered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, serOrderId] = useState('');
  const sideMenuRef = useRef(null);
  useOutsideClick(sideMenuRef, onClose);
  const clearCart = async () => {
    const carts = await axios.get(String(URLS.CART));
    carts.data.forEach((item: ISneaker) =>
      axios.delete(String(new URL(`cart/${item.id}`, URLS.CART)))
    );
  };

  const sendOrder = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(String(URLS.ORDERS), {
        id: nanoid(),
        date: new Date(),
        item: cartSneakers,
      });
      setIsOrdered(true);
      setIsLoading(false);
      setCartSneakers([]);
      serOrderId(res.data.id);

      await clearCart();
    } catch (error) {
      setIsLoading(false);
      if (error instanceof Error) {
        console.log(error.message);
      } else if (typeof error === 'string') {
        console.log(error);
      }
    }
  };

  return (
    <div
      className={`${styles.overlay} ${
        sideMenuOpened ? styles.overlay__visible : ''
      } `}
    >
      <div ref={sideMenuRef} className={styles.sideMenu}>
        <h3 className={styles.sideMenu__title}>Корзина </h3>
        <button
          onClick={() => onClose(false)}
          className={styles.sideMenu__close}
        >
          <img src={deleteIcon} alt='delete' />
        </button>
        {cartSneakers.length !== 0 && !isOrdered ? (
          <CartList
            isLoading={isLoading}
            onOrdered={() => {
              sendOrder();
            }}
            sneakers={cartSneakers}
            onDeleteCart={updateCart}
          />
        ) : (
          <CartInfo
            orderId={orderId}
            isOrdered={isOrdered}
            onClose={() => onClose(false)}
          />
        )}
      </div>
    </div>
  );
}

export default SideMenu;

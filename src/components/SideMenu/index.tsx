import deleteIcon from '../../img/favorite-delete.svg';
import styles from './SideMenu.module.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../context/AppContext.ts';
import { CartList } from '../Carts/CartList.tsx';
import { CartInfo } from '../Carts/CartInfo.tsx';
import { useOutsideClick } from '../../hooks/useOutsideClick.ts';
import { useOrderMutation } from '../../hooks/useOrderMutation.ts';

function SideMenu() {
  const {
    setSideMenuOpened: onClose,
    cartSneakers,
    updateCart,
    setCartSneakers,
    sideMenuOpened,
  } = useContext(AppContext);

  const [isOrdered, setIsOrdered] = useState(false);
  const [orderId, serOrderId] = useState('');
  const sideMenuRef = useRef(null);
  useOutsideClick(sideMenuRef, onClose);

  const { isLoading, mutate, isSuccess } = useOrderMutation(cartSneakers);
  const makeOrder = () => {
    mutate(serOrderId);
  };

  useEffect(() => {
    if (isSuccess) {
      setIsOrdered(true);
      if (setCartSneakers) {
        setCartSneakers([]);
      }
    }
  }, [isSuccess, setCartSneakers]);

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
            onOrdered={makeOrder}
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

import deleteIcon from '../../img/favorite-delete.svg';
import styles from './SideMenu.module.scss';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext.ts';
import CartList from '../Carts/CartList.tsx';
import InfoCart from '../Carts/CartInfo.tsx';
import useSneakersService from '../../service/useSneakersService.tsx';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890abcdef', 4);

function SideMenu() {
  const { addOrder } = useSneakersService();
  const {
    setSideMenuOpened: onClose,
    cartSneakers,
    onDeleteCart,
    setCartSneakers,
  } = useContext(AppContext);
  const [isOrdered, setIsOrdered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, serOrderId] = useState('');

  const sendOrder = async () => {
    try {
      setIsLoading(true);
      const res = await addOrder({ id: nanoid(), ...cartSneakers });
      setIsOrdered(true);
      setIsLoading(false);
      setCartSneakers([]);
      serOrderId(res.id);
    } catch (e) {
      setIsLoading(false);
      console.log(e.message);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.sideMenu}>
        <h3 className={styles.sideMenu__title}>Корзина </h3>
        <button
          onClick={() => onClose(false)}
          className={styles.sideMenu__close}
        >
          <img src={deleteIcon} alt='delete' />
        </button>
        {cartSneakers.length !== 0 && !isOrdered ? (
          <CartList
            onOrdered={() => {
              sendOrder();
            }}
            sneakers={cartSneakers}
            onDeleteCart={onDeleteCart}
          />
        ) : (
          <InfoCart
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

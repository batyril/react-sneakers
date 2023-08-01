// Импорты изображений в формате SVG
import deleteIcon from '../../image/favorite-delete.svg';
// Импорты стилей в CSS-модули
import styles from './SideMenu.module.scss';
// Импорты хуков из React
import { useContext, useRef, useState } from 'react';
// Импорт контекста
import { AppContext } from '../../context/AppContext.ts';
// Импорт компонентов CartList и CartInfo из соответствующих файлов
import { CartList } from '../Carts/CartList.tsx';
import { CartInfo } from '../Carts/CartInfo.tsx';
// Импорт хука useOutsideClick
import { useOutsideClick } from '../../hooks/useOutsideClick.ts';
// Импорты хуков useDispatch и useSelector из React Redux
import { useDispatch, useSelector } from 'react-redux';
// Импорт типов AppDispatch и RootState из файла store
import { AppDispatch, RootState } from '../../store';
// Импорты экшенов и селекторов из соответствующих файлов для Redux
import { POSTOrder } from '../../store/orderSlice.ts';
import { clearCartStore, DELETECart } from '../../store/cartSlice.ts';
// Импорт интерфейса ISneaker
import { ISneaker } from '../../const/interfaces.ts';

function SideMenu() {
  const { cart } = useSelector((state: RootState) => state.cartDetails);
  const deleteCart = (sneaker: ISneaker) => {
    dispatch(DELETECart(sneaker.id));
  };

  const { setSideMenuOpened: onClose, sideMenuOpened } = useContext(AppContext);

  const [isOrdered, setIsOrdered] = useState(false);
  const [orderId, serOrderId] = useState('');
  const sideMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(sideMenuRef, onClose);
  const dispatch = useDispatch<AppDispatch>();
  const makeOrder = () => {
    dispatch(POSTOrder(cart)).then((res) => serOrderId(res.payload));
    dispatch(clearCartStore());
    setIsOrdered(true);
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
          onClick={() => (onClose ? onClose(false) : null)}
          className={styles.sideMenu__close}
        >
          <img src={deleteIcon} alt='delete' />
        </button>

        {cart.length !== 0 ? (
          <CartList
            isLoading={false}
            onOrdered={makeOrder}
            sneakers={cart}
            onDeleteCart={deleteCart}
          />
        ) : (
          <CartInfo
            orderId={orderId}
            isOrdered={isOrdered}
            onClose={() => (onClose ? onClose(false) : null)}
          />
        )}
      </div>
    </div>
  );
}

export default SideMenu;

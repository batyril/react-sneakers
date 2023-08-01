// Импорты изображений в формате SVG для иконок
import account from '../../image/account.svg';
import openFavorites from '../../image/open-favorite.svg';
import logo from '../../image/nike-logo.svg';
import store from '../../image/store.svg';
import favoritePage from '../../image/delete-favorite.svg';
import ordersPage from '../../image/ordersPage.svg';
// Импорт хука useContext из React
import { useContext } from 'react';
// Импорт компонента Link из React Router
import { Link } from 'react-router-dom';
// Импорт контекста
import { AppContext } from '../../context/AppContext.ts';
// Импорт хука useLocation из React Router
import { useLocation } from 'react-router';
// Импорт стилей в CSS-модули для компонента Header
import styles from './Header.module.scss';
// Импорт констант из файла path.ts
import { PATHS } from '../../const/path.ts';

export const Header = () => {
  const location = useLocation();
  const isFavoritePage = location.pathname === '/favorite';
  const isOrdersPage = location.pathname === '/orders';
  const { setSideMenuOpened: onOpen, finalPrice } = useContext(AppContext);

  return (
    <header className={styles.header}>
      <Link title='home' to={PATHS.HOME}>
        <div className={styles.header__logo}>
          <img
            width='100px'
            className={styles.header__image}
            alt='logo'
            src={logo}
          />

          <div>
            <h3 className={styles.header__title}>Nike Sneaker Hub</h3>
            <p className={styles.header__description}>
              Магазин лучших кроссовок
            </p>
          </div>
        </div>
      </Link>
      <ul className={styles.header__menu}>
        <li onClick={() => (onOpen ? onOpen(true) : null)}>
          <img src={store} alt='store ' />
          <span>{finalPrice} ₽</span>
        </li>
        <li>
          <Link title='orders' to={PATHS.ORDERS}>
            <img src={isOrdersPage ? ordersPage : account} alt='account' />
          </Link>
        </li>
        <li>
          <Link title='favorite' to={PATHS.FAVORITE}>
            <img
              src={isFavoritePage ? favoritePage : openFavorites}
              alt='favorites'
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};

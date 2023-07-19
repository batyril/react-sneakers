import account from '../../image/account.svg';
import openFavorites from '../../image/open-favorite.svg';
import logo from '../../image/nike-logo.svg';
import store from '../../image/store.svg';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext.ts';
import { useLocation } from 'react-router';
import favoritePage from '../../image/delete-favorite.svg';
import ordersPage from '../../image/ordersPage.svg';
import styles from './Header.module.scss';
export const Header = () => {
  const location = useLocation();
  const isFavoritePage = location.pathname === '/favorite';
  const isOrdersPage = location.pathname === '/orders';
  const { setSideMenuOpened: onOpen, finalPrice } = useContext(AppContext);

  return (
    <header className={styles.header}>
      <Link title='home' to='/'>
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
        <li>
          <img
            onClick={() => (onOpen ? onOpen(true) : null)}
            src={store}
            alt='store '
          />
          <span>{finalPrice} ₽</span>
        </li>
        <li>
          <Link title='orders' to='/orders'>
            <img src={isOrdersPage ? ordersPage : account} alt='account' />
          </Link>
        </li>
        <li>
          <Link title='favorite' to='/favorite'>
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
